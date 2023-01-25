import React, { useState, useContext, useEffect } from 'react';
import { TransactionsLayout } from '../components/TransactionLayout';
import { InputField, InputButton, Select, AddButton, InputWrapper, Wrapper, ListWrapper } from '../components/InputField';
import { Transaction } from 'firebase/firestore';
import { addDoc, collection, Timestamp, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { AuthContext, UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
export const TransactionScreen = () => {
    const [transactionType, setTransactionType] = useState(true);
    const [amount, setAmount] = useState(0);
    const [amountFor, setAmountFor] = useState('food');
    const [list, setList] = useState([]);
    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!authContext.get&&userContext.user!==null) {
            navigate('/');
        }
        const document = collection(db, 'transactions');
        const q = query(document, where('user', '==', userContext.user.uid), orderBy("date", 'asc'));
        async function fetchDocs(q) {
            return await getDocs(q);
        }
        const result = fetchDocs(q);
        const docList = [];
        result.forEach((doc) => {
            docList.push((<><Transaction key={doc.data().id}>{doc.data().amount}--{doc.data().for}---{doc.data().date.toLocaleString()}</Transaction><hr /></>));
        });
        setList(docList);
    }, [list, authContext.get, navigate]);
    const handleType = () => {
        setTransactionType(!transactionType);
    }
    const handleAmount = (e) => {

        setAmount(e.target.value);
    }
    const handleFor = (e) => {
        setAmountFor(e.target.value);
    }
    const handleTransaction = async () => {
        const uid = userContext.user.uid;
        const values = { type: transactionType, amount: amount, for: amountFor, user: uid, date: Timestamp.now().toDate() };
        try {
            const document = collection(db, 'transactions');
            await addDoc(document, values);
            console.log('Saved transaction');
        }
        catch (e) {
            console.log('Error occurred while posting transaction');
        }
        console.log("In useEffect");
    }

    return (
        <TransactionsLayout>
            <Wrapper>
                <ListWrapper>
                    {list}
                </ListWrapper>
                <InputWrapper>
                    <InputButton onClick={handleType} transactionType={transactionType}>{transactionType ? '+' : '-'}</InputButton>
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

