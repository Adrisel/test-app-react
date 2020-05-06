import IAction from  '../../Models/action'
export const initialState = {
    name:''
}

export default function reducer(state: IState = initialState, action: IAction){

}

interface IState{
    name:string
}