palavras=[]
valor=[]
nome=[]
porcentagem=[]
def converteEmMega(valor):
    valor = valor/1024/1024
    return valor

with open('usuarios.txt','r',encoding='utf-8') as arq:
    textoEMlista=arq.readlines()
for i in textoEMlista:
    palavras.append(i.split())
for i,j in palavras:
    nome.append(i)
    valor.append(int(j))
totalEspaco=sum(valor)
max = max(valor)
min = min(valor)
media = converteEmMega(totalEspaco/len(nome))
totalemMega= converteEmMega(totalEspaco)
for i in valor:
    var = i/totalEspaco*100
    porcentagem.append(f'{var:.2f}%')
print(porcentagem)
print(media)
print(totalemMega)
for i in range(len(nome)):
    valor[i] = str(f'{converteEmMega(valor[i]):.2f} MB')
print("ACME Inc.               Uso do espaço em disco pelos usuários")
print("------------------------------------------------------------------------")
print('Nr.  Usuário        Espaço utilizado     % do uso')
for i in range(len(nome)):
    print(f'{i}  {nome[i].ljust(18)}{valor[i].ljust(20)}{porcentagem[i]}')
print(f'\nEspaço total ocupado: {totalemMega:.2f}MB')
print(f'Espaço médio ocupado:  {media:.2f}MB')

#colocando dentro do arquivo ralatorio.txt
with open('relatorio.txt', 'w', encoding='utf-8') as arq:
    arq.write("ACME Inc.               Uso do espaço em disco pelos usuários\n")
    arq.write("------------------------------------------------------------------------\n")

    arq.write('Nr.  Usuário        Espaço utilizado     % do uso\n')
    for i in range(len(nome)):
        arq.write(f'{i}  {nome[i].ljust(18)}{valor[i].ljust(20)}{porcentagem[i]}\n')
    arq.write(f'\nEspaço total ocupado: {totalemMega:.2f}MB')
    arq.write(f'\nEspaço médio ocupado:  {media:.2f}MB')