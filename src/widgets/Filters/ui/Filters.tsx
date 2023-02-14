import {FC} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../../../shared/ui/NeonButton/Button'
import { RootState } from '../../../app/store/store'
import { setActiveFilter } from '../model/FIltersSLice'

import './Filters.scss'

export const Filters: FC = () => {
    const filter = useSelector((state: RootState) => state.filter.activeFilter)
    const dispatch = useDispatch()

    console.log(filter)

    const onChangeFilter = (e: string) => {
        dispatch(setActiveFilter(e))
    }

    return (
        <div className="filters">
            <div className="filters__top">
                <h2 className="filters__title">Lets realise your plans together!</h2>
                <div className="filters__decor options__button">
                    <span className="filters__decor-dot options__button-dot"></span>
                    <span className="filters__decor-dot options__button-dot"></span>
                    <span className="filters__decor-dot options__button-dot"></span>
                </div>
                <Button color='#ff5761' content='New task'/>
            </div>
            <div className="filters__bottom">
                <div className="filters__bottom-wrapper">
                    <svg className='filters__icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"><path d="m1 10.399 19 20v18.405l10-6.25V30.399l19-20V1H1v9.399zM3 3h44v6.601l-19 20v11.845l-6 3.75V29.601l-19-20V3z"/></svg>
                    <select className='filters__bottom-filters'>
                        {/* <option className="filters__bottom-option">Quick filters...</option> */}
                        <option value="All" className="filters__bottom-option">All tasks</option>
                        <option value="Short" className="filters__bottom-option">Short period tasks</option>
                        <option value="Long" className="filters__bottom-option">Long period tasks</option>
                    </select>
                </div>
                <span className="filters__decor2"></span>
                <div className="filters__bottom-input">
                    <svg className="filters__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
                    <input className='filters__bottom-input-inner' placeholder='Search' type="text" />
                </div>
                
            </div>

            <div className="filters__status">
                <Button 
                    isActive={true}
                    content='active'
                    color='#ff5761' 
                    name='active'
                    onClick={onChangeFilter}
                />
                <Button 
                    color='#ff5761' 
                    name='completed'
                    content='Completed'
                    onClick={onChangeFilter}
                    />
                <Button 
                    color='#ff5761' 
                    name='failed'
                    content='Failed'
                    onClick={onChangeFilter}
                />
                </div>
           
        </div>
    )
}