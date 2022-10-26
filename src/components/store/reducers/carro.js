const INITIAL_STATE = {
    carros : [
        {id: 1, modelo: 'VW Gol'},
        {id: 2, modelo: 'VW Voyage'},
        {id: 3, modelo: 'Ford Ranger atual'},
        {id: 4, modelo: 'BMW Série 3 atual'}
    ]
};

export default function carro(state = INITIAL_STATE, action) {
    if(action.type === 'LIMPAR_MODELO_CARRO') {
        return {...state, carros: state.carros.map((carro, i) => i === 2 ? {modelo: 'vazio'} : {...carro} )};
    }
    
    return state;
};