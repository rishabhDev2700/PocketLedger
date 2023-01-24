import React, { useState } from 'react';
import { TransactionsLayout } from '../components/TransactionLayout';
import { InputField, InputButton, Select, AddButton, InputWrapper, Wrapper } from '../components/InputField';
import { setDoc, doc } from "firebase/firestore"; 
import { db } from '../FirebaseConfig';

export const TransactionScreen = () => {
    const [transactionType, setTransactionType] = useState(true);
    const [amount, setAmount] = useState(0);
    const [amountFor, setAmountFor] = useState('food');
    const handleType = () => {
        setTransactionType(!transactionType);
    }
    const handleAmount = (e) => {

        setAmount(e.target.value);
    }
    const handleFor  = (e) => {
        setAmountFor(e.target.value);
    }
    const handleTransaction = async () => {
        const document = doc(db,'transactions'); 
        await setDoc(document,)
        const values = {type: transactionType, amount:amount, for :amountFor}
        console.log(values);
    }
    return (
        <TransactionsLayout>
            <Wrapper>
                <InputWrapper>
                    <InputButton onClick={handleType} type={transactionType}>{transactionType ? '+' : '-'}</InputButton>
                    <InputField onChange={handleAmount} type='number' min='0' placeholder='Transaction' />
                    <Select onChange={handleFor}>
                        <option value='food'>Food</option>
                        <option value='earning'>Earnings</option>
                        <option value='transport'>Transport</option>
                        <option value='fun'>Fun/Party</option>
                        <option value='misc'>Misc</option>
                    </Select>
                </InputWrapper>
                <AddButton onClick={handleTransaction}>Insert</AddButton>
            </Wrapper>
        </TransactionsLayout>
    )
}

