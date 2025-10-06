"use client";

export default function Error({ error, reset}: { error: Error; reset: () => void;
}) {
    return (
        <div>
            {" "}
            <h2>Failed to load devices</h2> <p>{error.message}</p>{" "}
            <button onClick={() => reset()}>Try again</button>{" "}
        </div>
    );
}
