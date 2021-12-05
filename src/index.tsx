import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
    models: { transaction: Model },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freela da web',
                    type: 'deposit',
                    category: 'dev',
                    amount: 6000,
                    createdAt: new Date('2021-01-01 09:00:10'),
                },
                {
                    id: 2,
                    title: 'Frutas',
                    type: 'deposit',
                    category: 'food',
                    amount: 100,
                    createdAt: new Date('2021-05-07 12:00:30'),
                },
                {
                    id: 3,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'casa',
                    amount: 1100,
                    createdAt: new Date('2021-09-15 06:07:00'),
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })
        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data)
        })
    }
})

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root')
)
