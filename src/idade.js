
const Idade = () => {
    const dataHoje = new Date();
    const anoAtual = parseInt(dataHoje.getFullYear().toString());

    return anoAtual - 2000;
};
export default Idade()
