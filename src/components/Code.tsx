import { JSX } from 'preact'
import { useEffect } from 'preact/hooks'
import hljs from 'highlight/lib/core'
import javascript from 'highlight/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)
hljs.configure({ ignoreUnescapedHTML: true })

export default function Check(props: JSX.HTMLAttributes<HTMLButtonElement>) {

    useEffect(() => {
        hljs.highlightAll()
    })

    return (
        <div class="mt-[25px]">
            <pre>
                <code class={ props.class }>
                    { props.children }
                </code>
            </pre>
        </div>
    )

}