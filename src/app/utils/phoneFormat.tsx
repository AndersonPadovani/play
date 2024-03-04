export default function PhoneFormat(phone: string) {
    // Limpar todos os caracteres não numéricos
    const numbers = phone.replace(/\D/g, "");

    // Obter a posição atual do cursor
    const cursorPosition = window.getSelection()?.focusOffset || 0;

    // Formatar para (XX) X XXXX-XXXX
    let formattedPhone = `(${numbers.substring(0, 2)}`;
    if (numbers.length > 2) {
        formattedPhone += `) ${numbers.substring(2, 3)}`;
    }

    if (numbers.length > 3) {
        formattedPhone += ` ${numbers.substring(3, 7)}`;
    }

    if (numbers.length > 7) {
        formattedPhone += `-${numbers.substring(7)}`;
    }

    // Ajustar a posição do cursor após o caractere `)`
    if (cursorPosition > 2 && cursorPosition <= 5) {
        return (
            formattedPhone.substring(0, cursorPosition + 2) +
            formattedPhone.substring(cursorPosition + 3)
        );
    }

    return formattedPhone;
}
