import React from 'react';

export default function HomePage() {
    return (
        <section className="page-content">
            <div className="uk-child-width-1-2@s" data-uk-grid>
                <div className="uk-width-3-5@m">
                    This is the home page.
                </div>
                <aside className="uk-width-2-5@m">
                        <ul className="uk-nav uk-nav-default">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                </aside>
            </div>
        </section>
    );
}