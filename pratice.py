filmes = ["Pulp Fiction", "Interestellar", "O Protetor"]

print("Classificação de filmes:")

for filme in filmes:
    nota = int(input(f"De 1 a 5, como você classifica {filme}: " ))
    while nota < 1 or nota > 5:
        print("Classificação incorreta")
        nota = int(input(f"Como você classifica {filme}: " ))

print("Obrigado por classificar os filmes!")