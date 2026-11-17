"""
Centro Universitário Internacional UNINTER
Escola Superior Politécnica – ESP
Atividades Extensionistas – Plataforma de Pedidos Acessível para Idosos

Módulo Python de Leitura de Imagem (OCR) da Lista de Compras Manuscrita
Conforme especificado na Página 6 do documento do projeto.
"""

import os
import pytesseract
from PIL import Image, ImageDraw, ImageFont


def ler_lista_compras(caminho_imagem):
    # Abre a imagem enviada pelo usuário
    img = Image.open(caminho_imagem)
    # Configuração para reconhecimento de texto em português
    configuracao = '--psm 6 -l por'
    # Extrai o texto da imagem
    texto_extraido = pytesseract.image_to_string(img, config=configuracao)
    # Organiza os itens linha por linha
    itens = [linha.strip() for linha in texto_extraido.split('\n') if linha.strip()]
    return itens


def gerar_imagem_lista_exemplo(caminho_saida="lista_compras_idoso.jpg"):
    """
    Gera uma imagem de exemplo simulando a lista de compras de um idoso
    caso o arquivo ainda não exista no diretório, facilitando testes locais.
    """
    img = Image.new("RGB", (600, 500), color=(255, 253, 240))
    draw = ImageDraw.Draw(img)

    # Linhas de caderno
    for y in range(70, 480, 50):
        draw.line([(40, y), (560, y)], fill=(200, 220, 245), width=2)
    draw.line([(75, 30), (75, 480)], fill=(240, 160, 160), width=2)

    itens_exemplo = [
        "Lista do Mercado",
        "1 Arroz 5kg",
        "2 Feijao 1kg",
        "3 Leite Integral",
        "1 Cafe em po 500g",
        "1 Duzia de Ovos",
        "1 Pao de Forma",
        "6 Bananas Prata"
    ]

    y_texto = 38
    for item in itens_exemplo:
        draw.text((90, y_texto), item, fill=(35, 45, 85))
        y_texto += 50

    img.save(caminho_saida, "JPEG", quality=95)
    return caminho_saida


if __name__ == "__main__":
    arquivo_teste = "lista_compras_idoso.jpg"

    if not os.path.exists(arquivo_teste):
        try:
            gerar_imagem_lista_exemplo(arquivo_teste)
            print(f"[INFO] Imagem de teste gerada em: {arquivo_teste}")
        except Exception as e:
            print(f"[AVISO] Não foi possível gerar imagem de teste: {e}")

    try:
        # Exemplo de uso conforme página 6 do PDF
        itens_lista = ler_lista_compras(arquivo_teste)
        print("Itens reconhecidos da lista:", itens_lista)
    except Exception as erro:
        print("Observação: Certifique-se de que o binário do Tesseract OCR (com idioma 'por') está instalado no sistema.")
        print(f"Detalhes técnicos: {erro}")
        print("\nSimulação de saída esperada:")
        print("Itens reconhecidos da lista: ['1 Arroz 5kg', '2 Feijao 1kg', '3 Leite Integral', '1 Cafe em po 500g', '1 Duzia de Ovos', '1 Pao de Forma', '6 Bananas Prata']")
