import { Page } from "../utils/components";

export function Food() {
    return (
        <>
            <Page title="good bay area food">
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/Chickengs1"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Chicken G's
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.google.com/search?rlz=1C1RUCY_enUS750BR751&ei=S6iFW8LkI8ykjwTL_ofADA&q=falafel+stop&oq=falafel+stop&gs_l=psy-ab.3..0i71k1l8.9487.9487.0.9760.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.p_4h_VdACc0#lrd=0x808fb5d681ffd42d:0x86fc95f3cc7e8704,1,,,"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Falafel STOP
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.dindingdumplinghouses.com/"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Din Ding Union City
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.cheztj.com/"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Chez TJ
                        </a>
                    </li>
                    <li>Taco Bell</li>
                </ul>
            </Page>
            <Page title="hoping to try">
                <ul>
                    <li>Nari</li>
                    <li>Kusakabe</li>
                    <li>Ju-Ni</li>
                    <li>Chez Panisse</li>
                    <li>The French Laundry</li>
                    <li>Protégé</li>
                </ul>
            </Page>
            <Page title="...needs improvement">
                <ul>
                    <li>
                        <a
                            href="https://www.selbysrestaurant.com/"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Selby's
                        </a>
                    </li>
                    <li>Shalizaar</li>
                    <li>
                        <a
                            href="https://808-zone.com/"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            808 Zone
                        </a>
                    </li>
                    <li>Zareen's</li>
                </ul>
            </Page>
        </>
    );
}
