/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/invoices',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;