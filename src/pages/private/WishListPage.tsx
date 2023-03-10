import RootLayout from '../../layouts/RootLayout/RootLayout'
import { WishFilters, WishList } from 'containers'

export const WishListPage = () => {
    return (
        <RootLayout>
            <WishFilters/>
            <WishList />
        </RootLayout>
    )
}