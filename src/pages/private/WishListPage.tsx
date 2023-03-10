import RootLayout from '../../layouts/RootLayout/RootLayout'
import { WishList, Filters } from 'containers'

export const WishListPage = () => {
    return (
        <RootLayout>
            <Filters />
            <WishList />
        </RootLayout>
    )
}