import type { Route } from "./+types/_index.tsx";

export default function Component(_props: Route.ComponentProps) {
    console.log(_props);

    return <div>Hello,World!</div>;
}
