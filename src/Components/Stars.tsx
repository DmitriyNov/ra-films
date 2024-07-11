import Star from "./Star"

export default function Stars(props: {count: number}) {
    const {count} = props;
    if (typeof(count) === "string") {
        return
    } //Я не смог догадаться, как сделать без такого костыля, вроде задано значение count: number, но числа в виде строк проскакивают
    const counter: any[] = [];
    if (count <= 5 && count > 0) {
        for(let i: number = 0; i < count; i++) {
            counter.push(i);
        }
    }

    return (
        <ul className="stars">
            {counter.map((item: number) => (
                <Star key={item}/>
            ))}
        </ul>
    );
};
