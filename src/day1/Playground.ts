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
