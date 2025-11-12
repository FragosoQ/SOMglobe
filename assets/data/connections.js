// 1. Crie uma lista única de todos os destinos
const todosOsDestinos = [
    "Ecuador", "Cuba", "Mexico", "Peru", "Venezuela, RB", "Guyana", "United States",
    "Nigeria", "Sudan", "Kenya", "Uganda", "Zambia", "Malawi", "Ethiopia", "Somalia", "Madagascar", "Yemen, Rep.",
    "Pakistan", "Kazakhstan", "Maldives", "Sri Lanka", "Vietnam", "Thailand",
    "Singapore", "Indonesia", "Nepal", "Cambodia",
    "Tuvalu", "Nauru", "Kiribati", "Tonga", "New Caledonia", "New Zealand",
    "France", // Exemplo de um novo destino se necessário
];

// 2. Redefina data.connections para ter APENAS Portugal como chave
data.connections = {
    "Portugal": todosOsDestinos 
};

// 3. Processe os dados (para obter as coordenadas)
data.connections = getCountries(data.connections, data.countries);
