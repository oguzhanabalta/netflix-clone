import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from '../context/firebase'
import { Loading, Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

export default function BrowseContainer({ slides }) {
    
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return (
        profile.displayName ? (
            <>
                {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

                <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                            <Header.TextLink >
                                Diziler
                            </Header.TextLink>
                            <Header.TextLink >
                                Filmler
                            </Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                            <Header.Profile>
                                <Header.Picture src={user.photoURL} />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => firebase.auth().signOut()}>Oturumu kapat</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>

                    <Header.Feature>
                        <Header.FeatureCallOut>Joker'i Şimdi İzle</Header.FeatureCallOut>
                        <Header.Text>
                        Kalabalığın içinde sonsuza kadar yalnız kalan başarısız komedyen Arthur Fleck, Gotham City sokaklarında yürürken bağlantı arar. Arthur iki maske takıyor - bir palyaço olarak günlük işi için boyadığı maske ve etrafındaki dünyanın bir parçası gibi hissetmek için beyhude bir çabayla yansıttığı kılık.
                        </Header.Text>
                        <Header.PlayButton>Oynat</Header.PlayButton>
                    </Header.Feature>
                </Header>



            </>

        ) : <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}