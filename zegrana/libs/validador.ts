export default class Validador {
    static nulo(erro: string, value: any): string | null {
        return value === null || value === undefined ? null : erro
    }

    static nuloOuVazio(erro: string, value: any): string | null {
        return value === null || value === undefined || value === '' ? null : erro
    }

    static naoNulo(erro: string, value: any): string | null {
        return value !== null && value !== undefined ? null : erro
    }

    static naoNuloOuVazio(erro: string, value: any): string | null {
        return value !== null && value !== undefined && value !== '' ? null : erro
    }

    static iguais(erro: string, value: number, teste: number ) {
        return value == teste ? null: erro
    }

    static maiorQue(erro: string, value: number, min: number): string | null {
        return value > min ? null : erro
    }

    static maiorOuIgualQue(erro: string, value: number, min: number): string | null {
        return value >= min ? null : erro
    }

    static menorQue(erro: string, value: number, max: number): string | null {
        return value < max ? null : erro
    }

    static menorOuIgualQue(erro: string, value: number, max: number): string | null {
        return value <= max ? null : erro
    }

    static entre(erro: string, value: number, min: number, max: number): string | null {
        return value >= min && value <= max ? null : erro
    }

    static email(erro: string, value: string): string | null {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(value) ? null : erro
    }

    static senha(erro: string, value: string): string | null {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        return regex.test(value) ? null : erro
    }

    static somenteDigitos(erro: string, value: string) {
        if (value.split("").every(x => /\d/.test(x))) return null
        return erro
    }

    static ePassado(erro: string, value: Date) {
        return value.getTime() <= new Date().getTime() ? null : erro
    }


    static corEmHexa(erro: string, value: string): string | null {
        const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
        return regex.test(value) ? null : erro
    }

    static url(erro: string, valor: string): string | null {
        try {
            new URL(valor)
            return null
        } catch (e) {
            return erro
        }
    }
}