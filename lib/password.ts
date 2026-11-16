import "server-only";
import bcrypt from "bcryptjs";
import { randomInt } from "node:crypto";

// Sem caracteres ambíguos (0/O, 1/l/I) pra facilitar digitar.
const ALFABETO = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function gerarSenha(tamanho = 10): string {
  let s = "";
  for (let i = 0; i < tamanho; i++) s += ALFABETO[randomInt(ALFABETO.length)];
  return s;
}

export function hashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, 10);
}

export function conferirSenha(senha: string, hash: string): Promise<boolean> {
  return bcrypt.compare(senha, hash);
}
