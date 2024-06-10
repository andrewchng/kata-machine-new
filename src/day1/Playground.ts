export default function playground() {
    let a = {
        x: 0,
        y: 0,
    };

    for (let i = 0; i < 5; i++) {
        const b = a;
        b.x++;
    }

    console.log(a.x);
}
playground();

type myType = {
    name: "red" | "blue";
    age: number;
};

interface myTyp2e {
    name: "red" | "blue";
    age: number;
}
