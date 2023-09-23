export default function CountryInfo({ title, content }) {
    // console.log("🚀 ~ title content:", title, content, typeof content);

    if (typeof content === "object") {
        // console.log("👉 ~ content:", content);
        return (
            <p className="text-base">
                <span className="font-semibold">{title}: </span>{" "}
                {Object.keys(content).join(", ").slice(0, -1)}
            </p>
        );
    }
    return (
        <p className="text-base">
            <span className="font-semibold">{title}: </span> {content}
        </p>
    );
}
