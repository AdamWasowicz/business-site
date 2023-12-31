"use client"
import Link from 'next/link';
import styles from './navigation.module.scss';
import Logo from '../UI/logo/logo';
import { LinkParams } from '@/src/types/types';
import { 
    faChevronDown as arrowDown,
    faChevronUp as arrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Navigation: React.FC = () => {
    const navigationItems: LinkParams[] = [
        {
            href: 'about',
            text: 'O mnie'
        },

        {
            href: 'services',
            text: 'Usługi'
        },

        {
            href: 'contact',
            text: 'Kontakt'
        }
    ]

    const [navigationExpaned, setNavigationExpanded] = useState<boolean>(true);

    const expandNavigationHandler = () => {
        setNavigationExpanded(!navigationExpaned);
    }

    const navigateToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element === null) {
            return
        }

        element.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <nav className={styles.navigation}>
            <div className={styles.content}>
                <Link href='./' className={styles.logo}><Logo/></Link>

                <ul className={styles.list} hidden={navigationExpaned}>
                    {
                        navigationItems.map((item, key) => {
                            return (
                                <li key={key}>
                                    <button 
                                        className={styles.listItem} 
                                        onClick={() => navigateToElement(item.href) }
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={styles.expandButton}>
                    <FontAwesomeIcon 
                        className={styles.iconButton} 
                        icon={navigationExpaned ? arrowDown : arrowUp}
                        onClick={expandNavigationHandler}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;