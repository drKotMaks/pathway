
import React from 'react';
import styles from './recomendation.module.scss';
import ThemeToggle from '@/app/components/ThemeToggle';
import Link from 'next/link';


type PageProps = {
    params: {
        id: string; // Виправлено тип
    }
}

const References: React.FC<PageProps> = ({ params }) => {
    return (
        <section className={styles.root}>
            <div className={styles.reference}>
                <div className={styles.info}>References Component {params.id}
                <Link href={`/`}>HOME</Link>
                </div>
                <div className={styles.qrcode}>qr-code {params.id}</div>
                <ThemeToggle/>
            </div>
        </section>
    );
};

export default References;
