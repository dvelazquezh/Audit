import { selectAudit } from "actions/audit";
import { useDispatch } from "react-redux";

export default function CardTable({ data }) {

    const dispatch = useDispatch()

    const { id, plantilla, restaurante, realizadoPor, gerente, tipo } = data
           

    return (
        <tr>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {plantilla}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {restaurante}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {realizadoPor}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {gerente}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {tipo}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                <a
                    onClick={() => dispatch(selectAudit(id))}
                ><i className="far fa-play-circle fa-2x cursor-pointer"></i></a>

            </th>
        </tr>
    );
}
