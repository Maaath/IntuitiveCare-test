import "./main.css";
import Table from "../table/Table";
import { columns } from '../../data';
import { companies } from '../../data';
import { useState } from "react";

const Main = () => {
  const [filter,setFilter] = useState('');
  
  return (
    <div className='m'>
      <div className='m-header'>
        <span className='m-tittle'>Relação de Operadoras Ativas ANS</span>
        <div className='m-search'>
          <input type="text" placeholder="Pesquise" className="m-input" onChange={e => setFilter(e.target.value)} />
        </div>
      </div>
      <div className='m-list'>
        <Table columns={columns} data={companies.filter((val)=>{
            if (filter === ''){
              return val
            } else if ((val.Bairro.toLowerCase().includes(filter.toLowerCase())) || (val.CEP.toLowerCase().includes(filter.toLowerCase())) || (val.CNPJ.toLowerCase().includes(filter.toLowerCase())) ||  (val.Cargo_Representante.toLowerCase().includes(filter.toLowerCase())) ||  (val.Cidade.toLowerCase().includes(filter.toLowerCase())) || (val.Complemento.toLowerCase().includes(filter.toLowerCase())) || (val.DDD.toLowerCase().includes(filter.toLowerCase())) || (val.Data_Registro_ANS.toLowerCase().includes(filter.toLowerCase())) || (val.Email.toLowerCase().includes(filter.toLowerCase())) || (val.Fax.toLowerCase().includes(filter.toLowerCase())) ||  (val.Logradouro.toLowerCase().includes(filter.toLowerCase())) ||  (val.Modalidade.toLowerCase().includes(filter.toLowerCase())) || (val.Nome_Fantasia.toLowerCase().includes(filter.toLowerCase())) || (val.Numero.toLowerCase().includes(filter.toLowerCase())) ||  (val.Razao_Social.toLowerCase().includes(filter.toLowerCase())) || (val.Registro_ANS.toLowerCase().includes(filter.toLowerCase())) || (val.Representante.toLowerCase().includes(filter.toLowerCase())) || (val.Telefone.toLowerCase().includes(filter.toLowerCase())) || (val.UF.toLowerCase().includes(filter.toLowerCase()))){
              return val
            }
            }).map((val) => {
              return val
            }) }/>
      </div>
    </div>
  )
}

export default Main
