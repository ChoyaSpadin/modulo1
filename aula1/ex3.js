// Exercício 3 - Elabore um programa que recebe o nome de uma pessoa do terminal e mostra a seguinte mensagem: Olá {nome}! Seja bem vindo ao
// fantástico mundo da programação

const prompt = require("prompt-sync")()

const nome = prompt("Digite seu nome: ")


console.log(`Olá, ${nome}, seja bem vindo.`)
