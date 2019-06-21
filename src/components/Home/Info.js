import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Velit ipsam laboriosam nemo, quisquam ab
                            possimus labore aliquam corrupti ipsum adipisci
                            tempora inventore consectetur consequuntur
                            doloremque molestiae molestias doloribus libero nam!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, consectetur magni distinctio natus quod
                            facere eius molestiae hic fugiat quaerat doloribus
                            laborum officia quisquam beatae minima voluptatem
                            iure vel corporis? Lorem ipsum dolor sit amet,
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">
                                about
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
