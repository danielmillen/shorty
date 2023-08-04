"use client";
import { FormEvent, useState, useCallback } from "react";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newUrl = "Short url";
            setShortUrl(newUrl);
        },
        [setShortUrl]
    );

    return (
        <main>
            <h1>Shorty Url</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    placeholder="Enter link here"
                />
                <button type="submit">Shorten Url</button>
            </form>
            {shortUrl.length !== 0 ? <h3>{shortUrl}</h3> : null}
        </main>
    );
}
