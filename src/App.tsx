import { useState } from 'react'
import Modal from 'react-modal'

import { TransactionsProvider } from './hooks/useTransactions'

import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { Dashboard } from './components/Dashboard'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    const handleOpenNewTransactionModal  = () => { setIsNewTransactionModalOpen(true) }
    const handleCloseNewTransactionModal = () => { setIsNewTransactionModalOpen(false) }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
            <Dashboard />
            <GlobalStyle />
        </TransactionsProvider>
    )
}