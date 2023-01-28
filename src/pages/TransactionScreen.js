import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp, query, where, orderBy, getDocs } from "firebase/firestore";
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

    const document = collection(db, 'transactions');
    const q = query(document, where('user', '==', userContext.user.uid), orderBy("date", 'asc'));
    const fetchDocs = async (q, setList) => {
        const docList = [];
        const result = await getDocs(q);
        result.forEach((doc) => {
            const date =  doc.data().date.toDate();
            docList.push(<>
                <Transaction key={doc.id.toString()}>{doc.data().amount}=={doc.data().for}=={date.toDateString()}</Transaction><hr />
            </>)
        });
        setList(docList);
    }
    useEffect(() => {
        if (!authContext.get) {
            navigate('/');
        }
        fetchDocs(q, setList);
    }, [authContext.get, navigate, item]);
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

