var countGoodNumbers = function(chakraLength) {
    const MOD = 1e9 + 7;

    const chakraPower = (base, power) => {
        let result = 1n;
        base = BigInt(base);
        power = BigInt(power);
        const mod = BigInt(MOD);

        while (power > 0) {
            if (power % 2n === 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            power = power / 2n;
        }

        return result;
    };

    const even = Math.ceil(chakraLength / 2);
    const odd = Math.floor(chakraLength / 2);

    const evenWays = chakraPower(5, even);
    const oddWays = chakraPower(4, odd);

    return Number((evenWays * oddWays) % BigInt(MOD));
};