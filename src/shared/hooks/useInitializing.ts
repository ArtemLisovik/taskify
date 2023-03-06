import React from 'react';

import { useAppDispatch, useAppSelector } from 'shared/hooks/useRedux';
import {getUserProfile} from 'app/store/AuthThunk'

const useInitializing = () => {
  const dispatch = useAppDispatch()
  const { loader } = useAppSelector(state => state.auth) 

  React.useEffect(():any => {
      dispatch(getUserProfile())
  }, [])

  return loader
}

export default useInitializing