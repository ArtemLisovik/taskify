import RootLayout from '../layouts/RootLayout/RootLayout'
import { WishList } from 'widgets/WishList/ui/WishList'
import { Filters } from 'widgets/Filters/ui/Filters'

export const WishListPage = () => {
return(
    <RootLayout>
        <Filters 
        title='Visualize your wishes and we make it real together!'
        eventName='wish'
        filterButtonsName={['active', 'achieved']}
        />
        <WishList/>
    </RootLayout>
)
}