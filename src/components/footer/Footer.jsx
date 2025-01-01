const Footer = () => {
    return (
        <div>

            <footer className="bg-black text-white p-10 space-y-10 rounded-3xl">
                <div className="flex justify-center items-center w-full">
                    <img src="/assets/logo-footer.png" alt="logo-footer" />
                </div>

                <div className="footer flex justify-between">
                    <aside className="flex-1">
                        <h6 className="footer-title">About Us</h6>
                        <p className="text-left">We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/"><img src='/assets/5296499_fb_facebook_facebook logo_icon.png' alt="" /></a>
                            <a href="https://x.com/"><img src="/assets/icons8-twitterx-24-blck.png" alt="" className="bg-white" /></a>
                            <a href="https://www.youtube.com/"><img src="/assets/4375133_logo_youtube_icon.png" alt="" /></a>
                            <a href="https://www.instagram.com/"><img src="/assets/1298747_instagram_brand_logo_social media_icon.png" alt="" /></a>
                        </div>
                    </aside>
                    <nav className="flex-1">
                        <h6 className="footer-title">Quick Links</h6>
                        <a href="#home" className="link link-hover">Home</a>
                        <a href="#shop" className="link link-hover">Services</a>
                        <a href="#contact" className="link link-hover">About</a>
                        <a href="#contact" className="link link-hover">Contact</a>
                    </nav>
                    <form className="flex-1">
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="text-white label-text">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="Enter your email" className="input input-bordered join-item  text-black " />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>


                </div>

                <div className="-my-5">
                    <p className="border-t-2 border-gray-500 text-gray-500">@2024 Your Company All Rights Reserved.</p>
                </div>

            </footer>

        </div>

    );
};

export default Footer;