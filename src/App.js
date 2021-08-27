import React from 'react'
import { Provider } from 'react-redux'
import { Cotizacion } from './components/Cotizacion'
import { store } from './store/store'

export const App = () => {
    return (
       <Provider store={store}>
            <Cotizacion />
       </Provider>
    )
}
