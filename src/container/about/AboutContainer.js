import styled from "styled-components";

const AboutContainer = () => {
    const A = styled.div`
     max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-auto-rows: minmax(100px, auto);
            gap: .5em;
    `
    const B = styled.div`
      background-color: lightpink;
            border: 1px solid #333;
            padding: 1em;
            grid-column: 1 / 3;
    `
    const C = styled.div`
           background-color: paleturquoise;
            border: 1px solid #333;
            padding: 1em;
            grid-column: 1 / 3;
    `
    const D = styled.div`
        background-color: lightyellow;
            border: 1px solid #333;
            padding: 1em;
                    @media(max-width: 768px) {
                                        grid-column: 1 / 3;
                    }

    `
    const E = styled.div`
     background-color: limegreen;
            border: 1px solid #333;
            padding: 1em;
              @media(max-width: 768px) {

                grid-row: 4 / 5;
                grid-column: 1 / 3;
            }
    `
    const F = styled.div`
         background-color: wheat;
            border: 1px solid #333;
            padding: 1em;
            grid-column: 1 / 3;
    `
    return (
        <>
            <A>
                <B />
                <C />
                <D />
                <E></E>
                <F />
            </A>
        </>
    )
}
export default AboutContainer;