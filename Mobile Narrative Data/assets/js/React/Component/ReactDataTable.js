(() => {
    const Filters = (props) => {
        let updateAbout = (clickEvent) => {
            props.updateFormState({
                about: clickEvent.target.value,
            });
        }

        let updateSubReddit = (clickEvent) => {
            props.updateFormState({
                SubReddit: clickEvent.target.value,
            });
        }

        let updateDataSet = (clickEvent) => {
            props.updateFormState({
                DataSet: clickEvent.target.value,
            });
        }

        let updateTop = (clickEvent) => {
            props.updateFormState({
                Top10: clickEvent.target.checked,
            });
        }

        return (
            <React.Fragment>
                <p><b>Filter your data here:</b></p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>about:</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateAbout}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='Meme/Humor'>Meme/Humor</option>
                                <option value='Art/Fashion'>Art/Fashion</option>
                                <option value='Media'>Media</option>
                                <option value='Tips/Hints'>Tips/Hints</option>
                                <option value='Discussion'>Discussion</option>
                                <option value='Suggestion'>Suggestion</option>
                                <option value='Lore'>Lore</option>
                                <option value='Guide'>Guide</option>
                                <option value='Bungie'>Bungie</option>
                                <option value='News'>News</option>
                                <option value='Advice'>Advice</option>
                                <option value='MISC'>MISC</option>
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <b>SubReddit:</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateSubReddit}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='Destiny 2'>Destiny 2</option>
                                <option value='Destiny the Game'>Destiny the Game</option>
                            </select>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='row'>
                        <div className="col-md-1">
                        </div>
                        <div className='col-md-3'>
                            <b>Data Set:</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateDataSet}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='Top Month'>Top Month</option>
                                <option value='Top All Time'>Top All Time</option>
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <b>Top 10 Only:</b>
                        </div>
                        <div className='col-md-2'>
                        <input
                                type='checkbox'

                                onChange={updateTop}

                            />

                        </div>
                        <div className='col-md-1'>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }




    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>About</th>
                            <th># of Upvotes</th>
                            <th># of Comments</th>
                            <th>Link</th>
                            <th>SubReddit</th>
                            <th>Data Set</th>
                        </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.Date}</td>
                                    <td>{row.about}</td>
                                    <td>{row.upvotes}</td>
                                    <td>{row.Comments}</td>
                                    <td>{row.Link}</td>
                                    <td>{row.SubReddit}</td>
                                    <td>{row.DataSet}</td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>
        );
    }




    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                about: '',
                SubReddit: '',
                DataSet: '',
                Top10: false
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            if (this.state.about !== '') {
                filteredData = filteredData.filter(
                    (row) => row.about === this.state.about
                );
            }

            if (this.state.SubReddit !== '') {
                filteredData = filteredData.filter(
                    (row) => row.SubReddit === this.state.SubReddit
                );
            }

            if (this.state.DataSet !== '') {
                filteredData = filteredData.filter(
                    (row) => row.DataSet === this.state.DataSet
                );
            }
            
            if (true === this.state.Top10) {
                filteredData = filteredData.filter(
                    (row) => row.Top10 === true
                );
            }

            return (
                <React.Fragment>
                    <Filters
                        about={this.state.about}
                        SubReddit={this.state.SubReddit}
                        DataSet={this.state.DataSet}
                        Top10={this.state.Top10}
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }
    }


    const Data = [
        {
            "Date": "9/20/23",
            "about": "Meme/Humor",
            "upvotes": 4000,
            "Comments": 359,
            "Link": "https://www.reddit.com/r/destiny2/comments/16nak3e/my_friend_sent_me_this_and_i_dont_know_what_it_is/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "9/21/23",
            "about": "Art/Fashion",
            "upvotes": 3500,
            "Comments": 73,
            "Link": "https://www.reddit.com/r/destiny2/comments/16opiwu/warlock_when_final_shape_launches/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "9/24/23",
            "about": "Meme/Humor",
            "upvotes": 3400,
            "Comments": 96,
            "Link": "https://www.reddit.com/r/destiny2/comments/16rgmkt/they_cant_keep_getting_away_with_thiiiiiiis/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/03/23",
            "about": "Meme/Humor",
            "upvotes": 3400,
            "Comments": 505,
            "Link": "https://www.reddit.com/r/destiny2/comments/16z04wu/bungie_arent_the_only_ones_doing_this_btw/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/02/23",
            "about": "Meme/Humor",
            "upvotes": 3300,
            "Comments": 30,
            "Link": "https://www.reddit.com/r/destiny2/comments/16yi102/does_bungie_even_know_what_theyve_done/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "9/25/23",
            "about": "Meme/Humor",
            "upvotes": 3300,
            "Comments": 31,
            "Link": "https://www.reddit.com/r/destiny2/comments/16sao5a/credit_to_destiny_thememe_on_twitter/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/03/23",
            "about": "Meme/Humor",
            "upvotes": 3200,
            "Comments": 113,
            "Link": "https://www.reddit.com/r/destiny2/comments/16zmedw/i_mean_seriously/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/02/23",
            "about": "Meme/Humor",
            "upvotes": 3200,
            "Comments": 592,
            "Link": "https://www.reddit.com/r/destiny2/comments/16yqc26/even_twitter_knows_its_wrong/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "9/26/23",
            "about": "Meme/Humor",
            "upvotes": 3100,
            "Comments": 74,
            "Link": "https://www.reddit.com/r/destiny2/comments/16stx8m/this_is_toptier_trolling/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/04/23",
            "about": "Media",
            "upvotes": 3000,
            "Comments": 105,
            "Link": "https://www.reddit.com/r/destiny2/comments/170i71l/not_sure_if_everyone_noticed_this_but_the_sword/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "9/18/23",
            "about": "Meme/Humor",
            "upvotes": 3000,
            "Comments": 326,
            "Link": "https://www.reddit.com/r/destiny2/comments/16lxvzk/at_least_they_had_fun/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/06/23",
            "about": "Media",
            "upvotes": 3000,
            "Comments": 114,
            "Link": "https://www.reddit.com/r/destiny2/comments/171v6hz/did_lord_shaxx_do_something_to_the_crucible_that/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/01/23",
            "about": "Media",
            "upvotes": 2900,
            "Comments": 255,
            "Link": "https://www.reddit.com/r/destiny2/comments/16x6j1m/apparently_this_is_a_thing_now_this_is_not_my/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month"
        },
        {
            "Date": "10/12/23",
            "about": "Tips/Hints",
            "upvotes": 2700,
            "Comments": 540,
            "Link": "https://www.reddit.com/r/destiny2/comments/176cxqp/psa_dont_buy_always_on_time/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/12/23",
            "about": "Meme/Humor",
            "upvotes": 2700,
            "Comments": 108,
            "Link": "https://www.reddit.com/r/destiny2/comments/176v99a/twab/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/18/23",
            "about": "Meme/Humor",
            "upvotes": 2700,
            "Comments": 87,
            "Link": "https://www.reddit.com/r/destiny2/comments/16mrfw9/comic_soalternative_forms_of_payment_eh/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/23/23",
            "about": "Discussion",
            "upvotes": 2700,
            "Comments": 237,
            "Link": "https://www.reddit.com/r/destiny2/comments/16r53b8/size_differences/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month"
        },
        {
            "Date": "09/20/23",
            "about": "Meme/Humor",
            "upvotes": 2700,
            "Comments": 289,
            "Link": "https://www.reddit.com/r/destiny2/comments/16nozj0/it_was_him_all_along/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/16/23",
            "about": "Meme/Humor",
            "upvotes": 2600,
            "Comments": 444,
            "Link": "https://www.reddit.com/r/destiny2/comments/16kwrbt/unpopular_opinion_this_weekend_has_been_the/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/16/23",
            "about": "Meme/Humor",
            "upvotes": 2600,
            "Comments": 140,
            "Link": "https://www.reddit.com/r/destiny2/comments/16l4jbo/farewell_for_now/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/8/23",
            "about": "Meme/Humor",
            "upvotes": 2500,
            "Comments": 78,
            "Link": "https://www.reddit.com/r/destiny2/comments/173c31b/rolled_into_trials_solo_ended_up_with_henchmen/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/21/23",
            "about": "Meme/Humor",
            "upvotes": 2500,
            "Comments": 140,
            "Link": "https://www.reddit.com/r/destiny2/comments/16ovuoo/acting_like_my_brother_here/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/16/23",
            "about": "Meme/Humor",
            "upvotes": 2400,
            "Comments": 40,
            "Link": "https://www.reddit.com/r/destiny2/comments/16lfcni/videos_already_in_production/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/25/23",
            "about": "Meme/Humor",
            "upvotes": 2400,
            "Comments": 85,
            "Link": "https://www.reddit.com/r/destiny2/comments/16s746m/something_something_servers/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/16/23",
            "about": "Discussion",
            "upvotes": 2400,
            "Comments": 387,
            "Link": "https://www.reddit.com/r/destiny2/comments/16lknj1/the_fun_guns_appear_to_be_officially_over/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "02/10/21",
            "about": "Meme/Humor",
            "upvotes": 35000,
            "Comments": 790,
            "Link": "https://www.reddit.com/r/destiny2/comments/lh6z1v/zavala_voice_actor_lance_reddick_reads_hilarious/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "10/17/20",
            "about": "Meme/Humor",
            "upvotes": 33000,
            "Comments": 577,
            "Link": "https://www.reddit.com/r/destiny2/comments/jd8nt6/if_it_aint_broke_dont_fix_it/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "3/18/23",
            "about": "Media",
            "upvotes": 31000,
            "Comments": 439,
            "Link": "https://www.reddit.com/r/destiny2/comments/11uu1kj/from_lances_wife_stephanie_3/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "09/20/20",
            "about": "Meme/Humor",
            "upvotes": 29000,
            "Comments": 501,
            "Link": "https://www.reddit.com/r/destiny2/comments/iwdiq4/this_is_what_1000_hours_on_destiny_2_looks_like/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "06/15/21",
            "about": "Media",
            "upvotes": 29000,
            "Comments": 1100,
            "Link": "https://www.reddit.com/r/destiny2/comments/o0qqc1/i_applied_for_a_job_at_bungie_about_a_week_ago/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "10/15/20",
            "about": "Meme/Humor",
            "upvotes": 27000,
            "Comments": 358,
            "Link": "https://www.reddit.com/r/destiny2/comments/jbx2ew/a_worthy_investment/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "07/07/21",
            "about": "Meme/Humor",
            "upvotes": 25000,
            "Comments": 1000,
            "Link": "https://www.reddit.com/r/destiny2/comments/ofi307/its_true_though/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "09/27/20",
            "about": "Media",
            "upvotes": 25000,
            "Comments": 508,
            "Link": "https://www.reddit.com/r/destiny2/comments/j16iuh/possibly_the_coolest_super_execution_ever/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "11/19/19",
            "about": "Meme/Humor",
            "upvotes": 24000,
            "Comments": 377,
            "Link": "https://www.reddit.com/r/destiny2/comments/dym4r1/your_enemy_cant_kill_if_theyre_dead/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "09/01/19",
            "about": "Meme/Humor",
            "upvotes": 24000,
            "Comments": 551,
            "Link": "https://www.reddit.com/r/destiny2/comments/dbz1rj/contacting_destiny_2_servers/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/13/20",
            "about": "Meme/Humor",
            "upvotes": 24000,
            "Comments": 362,
            "Link": "https://www.reddit.com/r/destiny2/comments/i939tg/i_found_a_secret_in_pit_of_heresy/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "10/04/21",
            "about": "Meme/Humor",
            "upvotes": 23000,
            "Comments": 637,
            "Link": "https://www.reddit.com/r/destiny2/comments/q157lb/returning_to_destiny_after_a_two_year_break_and/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "03/23/20",
            "about": "Meme/Humor",
            "upvotes": 23000,
            "Comments": 240,
            "Link": "https://www.reddit.com/r/destiny2/comments/fqku5a/my_experience_versus_hard_light/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "11/18/20",
            "about": "Meme/Humor",
            "upvotes": 23000,
            "Comments": 569,
            "Link": "https://www.reddit.com/r/destiny2/comments/jwtxw3/destiny_players_in_a_nutshell/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "11/29/20",
            "about": "Meme/Humor",
            "upvotes": 22000,
            "Comments": 242,
            "Link": "https://www.reddit.com/r/destiny2/comments/k3gy9v/secret_message_hidden_in_the_stella_incognita_bond/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "05/28/21",
            "about": "Meme/Humor",
            "upvotes": 22000,
            "Comments": 240,
            "Link": "https://www.reddit.com/r/destiny2/comments/nn213c/me_when/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "06/09/20",
            "about": "Meme/Humor",
            "upvotes": 22000,
            "Comments": 322,
            "Link": "https://www.reddit.com/r/destiny2/comments/gzmmvl/the_traveler_is_referred_as_the_gardener/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "01/07/21",
            "about": "Meme/Humor",
            "upvotes": 22000,
            "Comments": 408,
            "Link": "https://www.reddit.com/r/destiny2/comments/ksrj56/insert_well_of_radiance_noise/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "05/11/20",
            "about": "Media",
            "upvotes": 21000,
            "Comments": 1400,
            "Link": "https://www.reddit.com/r/destiny2/comments/ghndsy/shoutout_to_all_of_us_guardians_who_still_have/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "06/08/21",
            "about": "Meme/Humor",
            "upvotes": 21000,
            "Comments": 612,
            "Link": "https://www.reddit.com/r/destiny2/comments/nv3bl5/hey_bungie/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "07/14/20",
            "about": "Meme/Humor",
            "upvotes": 21000,
            "Comments": 340,
            "Link": "https://www.reddit.com/r/destiny2/comments/hr1rzt/wayfarer_grind/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "08/21/20",
            "about": "Media",
            "upvotes": 21000,
            "Comments": 453,
            "Link": "https://www.reddit.com/r/destiny2/comments/iebjzx/just_wanna_brighten_up_some_nights/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "05/30/21",
            "about": "Meme/Humor",
            "upvotes": 21000,
            "Comments": 631,
            "Link": "https://www.reddit.com/r/destiny2/comments/mglxjv/true_story_btw_they_all_have_abandoned_time_ago/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "12/06/20",
            "about": "Media",
            "upvotes": 20000,
            "Comments": 263,
            "Link": "https://www.reddit.com/r/destiny2/comments/k87uz5/i_was_struggling_to_get_cloudstrike_so_i_hacked/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "04/11/21",
            "about": "Meme/Humor",
            "upvotes": 20000,
            "Comments": 789,
            "Link": "https://www.reddit.com/r/destiny2/comments/morvk0/dead_game/",
            "SubReddit": "Destiny 2",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "09/19/23",
            "about": "Rant",
            "upvotes": 2900,
            "Comments": 372,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16my5hk/using_x_for_game_status_notifications_is_stupid/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/16/23",
            "about": "Discussion",
            "upvotes": 2200,
            "Comments": 147,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/178zb24/the_giga_chad_guardian/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "09/16/23",
            "about": "Suggestion",
            "upvotes": 2100,
            "Comments": 434,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16lno46/joe_blackburn_please_please_refrain_from_asking/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/11/23",
            "about": "Suggestion",
            "upvotes": 2000,
            "Comments": 436,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/175jnee/bungie_if_you_nerf_conditional_finality_because/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "09/25/23",
            "about": "MISC",
            "upvotes": 2000,
            "Comments": 275,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16spkjd/i_cant_believe_the_one_class_that_gets_a_flaming/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/01/23",
            "about": "Discussion",
            "upvotes": 1900,
            "Comments": 708,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16xcu02/why_does_bungie_think_the_games_economy_will_only/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/03/23",
            "about": "Discussion",
            "upvotes": 1800,
            "Comments": 211,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16zjwsc/the_ingame_bungie_store_prompts_are_trashy/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "09/21/23",
            "about": "Lore",
            "upvotes": 1800,
            "Comments": 156,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16ou6zg/i_think_eris_being_god_of_vengeance_is_more/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "09/29/23",
            "about": "Discussion",
            "upvotes": 1700,
            "Comments": 620,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16w62ah/legendary_shard_removal_seems_really_silly_based/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/04/23",
            "about": "MISC",
            "upvotes": 1700,
            "Comments": 358,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/170h33x/there_is_not_a_better_feeling_in_this_game_than/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": true
        },
        {
            "Date": "10/07/23",
            "about": "Discussion",
            "upvotes": 1700,
            "Comments": 369,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/172nm0p/i_just_did_my_first_last_wish_and_wtf_now_thats/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/12/23",
            "about": "Guide",
            "upvotes": 1600,
            "Comments": 547,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/176d5gp/a_megasummary_of_things_from_joes_stream_today/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/22/23",
            "about": "MISC",
            "upvotes": 1600,
            "Comments": 685,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16pldbz/its_happening_again/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/05/23",
            "about": "Discussion",
            "upvotes": 1500,
            "Comments": 202,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/170vuxn/spoiler_whatever_your_thoughts_on_this_seasons/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/02/23",
            "about": "Suggestion",
            "upvotes": 1500,
            "Comments": 165,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16y6hvc/being_forced_into_a_cutscene_mission_when_opening/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/15/23",
            "about": "Suggestion",
            "upvotes": 1500,
            "Comments": 123,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/178kvxl/chill_clip_shouldnt_get_a_global_nerf_because_of/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/17/23",
            "about": "Discussion",
            "upvotes": 1400,
            "Comments": 493,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16lleqf/thanks_bungie/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/04/23",
            "about": "Discussion",
            "upvotes": 1400,
            "Comments": 195,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16zyy0g/if_strand_is_going_with_the_river_and_stasis_is/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/01/23",
            "about": "MISC",
            "upvotes": 1300,
            "Comments": 342,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16xv4ex/please_dont_put_a_t3_offering_in_if_we_just/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "10/04/23",
            "about": "Discussion",
            "upvotes": 1300,
            "Comments": 284,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16zthx5/can_we_just_take_a_moment_to_reflect_on_the_huge/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/23/23",
            "about": "Discussion",
            "upvotes": 1300,
            "Comments": 1900,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16q9tju/what_games_are_you_playing_now_that_d2_is/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/17/23",
            "about": "Discussion",
            "upvotes": 1300,
            "Comments": 476,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16l5ve7/with_marvels_avengers_being_deleted_it_really/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/30/23",
            "about": "Discussion",
            "upvotes": 1200,
            "Comments": 467,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16x2a5u/wannabe_sweats_are_making_lamps_the_hardest_crota/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/17/23",
            "about": "Suggestion",
            "upvotes": 1200,
            "Comments": 104,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16lk55t/this_and_the_12_man_raids_have_highlighted_a_lack/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/24/23",
            "about": "Discussion",
            "upvotes": 1200,
            "Comments": 285,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/16rsnzl/i_still_miss_elemental_wells_charged_with_light/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top Month",
            "Top10": false
        },
        {
            "Date": "09/30/19",
            "about": "Bungie",
            "upvotes": 81000,
            "Comments": 71000,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/dbekub/maintenance_has_begun_25k_upvotes_and_we_will/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/14/15",
            "about": "Meme/Humor",
            "upvotes": 72000,
            "Comments": 2100,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/3gzfb5/fuck_destiny_fuck_gjallarhorn_if_this_post_gets/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "03/17/23",
            "about": "News",
            "upvotes": 60000,
            "Comments": 3500,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/11u02y1/rip_lance_reddick/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/14/20",
            "about": "Meme/Humor",
            "upvotes": 60000,
            "Comments": 691,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/i9qd2h/fuck_destiny_fuck_gjallarhorn_if_this_post_gets/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/12/16",
            "about": "Meme/Humor",
            "upvotes": 47000,
            "Comments": 843,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/4xcnvc/fuck_destiny_fuck_gjallarhorn_if_this_post_gets/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "09/06/17",
            "about": "Advice",
            "upvotes": 45000,
            "Comments": 2800,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/6yi1yg/do_not_spend_a_single_cent_on_micro_transactions/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/12/16",
            "about": "Bungie",
            "upvotes": 43000,
            "Comments": 1400,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/4xej9z/if_this_gets_7777_upvotes_deej_and_i_will_send_a/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/16/19",
            "about": "Meme/Humor",
            "upvotes": 41000,
            "Comments": 699,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/cr3uxl/fuck_destiny_fuck_gjallarhorn_if_this_post_gets/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/17/18",
            "about": "Bungie",
            "upvotes": 34000,
            "Comments": 19000,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/986skx/17777_uphorns_and_we_will_give_out_7_caydes_last/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "08/13/21",
            "about": "Bungie",
            "upvotes": 30000,
            "Comments": 18000,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/p3okk5/its_time_to_pump_up_these_numbers_so_we_can_give/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": true
        },
        {
            "Date": "01/10/19",
            "about": "Bungie",
            "upvotes": 30000,
            "Comments": 5000,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/aenhdz/our_destiny/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "12/30/17",
            "about": "News",
            "upvotes": 25000,
            "Comments": 2200,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/7n1ttb/destiny_2_wins_buyers_remorse_award_at_the/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "08/12/22",
            "about": "Meme/Humor",
            "upvotes": 25000,
            "Comments": 268,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/wmmymy/fuck_destiny_fuck_gjallarhorn_if_this_post_gets/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "06/09/20",
            "about": "MISC",
            "upvotes": 25000,
            "Comments": 59,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/gzqzv8/shoutout_to_bungie_for_leading_with_846_of/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "10/02/19",
            "about": "Suggestion",
            "upvotes": 25000,
            "Comments": 1400,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/dc8rf9/sony_has_agreed_to_implement_cross_play_on_any/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "08/16/19",
            "about": "MISC",
            "upvotes": 24000,
            "Comments": 417,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/cr78q5/shitpost_if_this_gets_777777_upvotes_ill_get_a/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "02/21/22",
            "about": "Meme/Humor",
            "upvotes": 24000,
            "Comments": 439,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/sycn7d/new_exotic_assault_rifle_gift_of_eden/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "05/18/17",
            "about": "Meme/Humor",
            "upvotes": 24000,
            "Comments": 360,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/6by0ps/quick_half_the_mods_are_gone_everyone_upvote_this/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "06/06/19",
            "about": "MISC",
            "upvotes": 23000,
            "Comments": 2300,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/bxjmzz/everyone_screaming_i_want_a_refund_in_reaction_to/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "11/25/20",
            "about": "Suggestion",
            "upvotes": 22000,
            "Comments": 1400,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/k0vosd/bungie_please_dont_listen_to_the_streamers_for/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "06/27/19",
            "about": "Meme/Humor",
            "upvotes": 21000,
            "Comments": 1400,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/c69cz0/its_offcial_anthem_has_killed_destiny/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "09/06/17",
            "about": "Suggestion",
            "upvotes": 20000,
            "Comments": 1500,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/6yggi6/bungie_please_revert_shaders_back_to_unlimited/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "03/13/20",
            "about": "Meme/Humor",
            "upvotes": 20000,
            "Comments": 474,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/fi91qa/the_return_of_trials_is_pointless/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "11/24/20",
            "about": "Suggestion",
            "upvotes": 19000,
            "Comments": 827,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/k0798x/gambit_protip/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        },
        {
            "Date": "10/08/19",
            "about": "MISC",
            "upvotes": 19000,
            "Comments": 873,
            "Link": "https://www.reddit.com/r/DestinyTheGame/comments/df2trq/bungie_play_the_way_you_want_to_play_also_bungie/",
            "SubReddit": "Destiny the Game",
            "DataSet": "Top All Time",
            "Top10": false
        }
    ];




    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={Data} />);
})();
