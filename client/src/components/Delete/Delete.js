import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as request from '../../services/charService';

export const Delete = () => {
    const navigate = useNavigate();
    const { charId } = useParams();

    useEffect(() => {
        request.deleteOne(charId);
        navigate('/catalog');
    }, [charId, navigate]);
}