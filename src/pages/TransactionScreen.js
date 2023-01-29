import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp, query, where, orderBy, getDocs, doc, deleteDoc } from "firebase/firestore";

import { TransactionsLayout } from '../components/TransactionLayout';
import { Transaction } from './../components/Transaction'
import { InputField, InputButton, Select, AddButton, InputWrapper, Wrapper, ListWrapper } from '../components/InputField';
import { AuthContext, UserContext } from '../App';
import { db } from '../FirebaseConfig';


export const TransactionScreen = () => {
    const [transactionType, setTransactionType] = useState(true);
    const [amount, setAmount] = useState(0);
    const [amountFor, setAmountFor] = useState('food');
    const [list, setList] = useState([]);
    const [item, setItem] = useState({});
    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();


    const removeTransaction = async (key_id) => {
        const id = key_id+""; 
        await deleteDoc(collection(db, 'transactions',id));
        setItem({});
    }
    useEffect(() => {
        if (!authContext.get) {
            navigate('/');
        }
        const document = collection(db, 'transactions');
        const q = query(document, where('user', '==', userContext.user.uid), orderBy("date", 'asc'));
        const fetchDocs = async (setList) => {
            const docList = [];
            const result = await getDocs(q);
            result.forEach((doc) => {
                const date = doc.data().date.toDate();
                docList.push(<div>
                    <Transaction key_id={doc.id} amount={doc.data().amount} for={doc.data().for} date={date.toDateString()} remove={removeTransaction} /><hr />
                </div>)
            });
            setList(docList);
        }
        console.log("Transactions useEffect triggered");
        fetchDocs(setList);
    }, [authContext.get, userContext.user.uid, navigate, item]);
    const handleTransaction = async () => {
        const uid = userContext.user.uid;
        const values = { type: transactionType, amount: amount, for: amountFor, user: uid, date: Timestamp.now().toDate() };
        try {
            const document = collection(db, 'transactions');
            await addDoc(document, values);
            setItem(values);
        }
        catch (e) {
            console.log('Error occurred while posting transaction');
        }
    }

    return (
        <TransactionsLayout>
            <Wrapper>
                <ListWrapper>
                    {list}
                </ListWrapper>
                <InputWrapper>
                    <InputButton onClick={() => setTransactionType(!transactionType)} transactionType={transactionType}>{transactionType ? '+' : '-'}</InputButton>
                    <InputField onChange={(e) => setAmount(e.target.value)} type='number' min='0' placeholder='Transaction' />
                    <Select onChange={(e) => setAmountFor(e.target.value)}>
                        <option value='Food'>Food</option>
                        <option value='Earning'>Earnings</option>
                        <option value='Transport'>Transport</option>
                        <option value='Fun'>Fun/Party</option>
                        <option value='Misc'>Misc</option>
                    </Select>
                </InputWrapper>
                <AddButton onClick={handleTransaction}>Insert</AddButton>
            </Wrapper>
        </TransactionsLayout>
    )
}

