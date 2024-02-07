import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <h1>Base Calculator</h1>
            <p>A simple calculator for base conversion</p>
            <Image
                src='/public/logo.svg'
                alt='logo'
                width={200}
                height={200}
            />
        </div>
    );
}
