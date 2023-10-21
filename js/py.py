import mysql.connector
def inserir(nome, phone, endereco):
    try:
        conexao = mysql.connector.connect(user="root", password="", host="127.0.0.1", database="agenciatelefonica")
        cursor = conexao.cursor()
        inserir_contato = f"""INSERT INTO Contatos (Nome, NumeroTelefone, Endereco)
                        VALUES ('{nome}',' {phone}', '{endereco}')"""
        cursor.execute(inserir_contato)
        conexao.commit()
        cursor.close()
        conexao.close()
    except mysql.connector.Error as erro:
        print(erro)

nome = input('nome: ')
fone = input('phone: ')
endereco = input('endereco: ')
inserir(nome, fone, endereco)
