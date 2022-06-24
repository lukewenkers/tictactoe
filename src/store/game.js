const game = {
    namespaced: true,
    state: {
        nextPlayer: 'o',
        fields: {
            x: [],
            o: []
        }
    },
    getters: {
        getField: (state) => (id) => {
            if(state.fields.x.filter(temp => temp == id).length > 0) {
                return "x"
            } else if(state.fields.o.filter(temp => temp == id).length > 0) {
                return "o"
            } else {
                return " "
            }
        }
    },
    actions: {
        togglePlayer({commit}) {
            commit("TOGGLE_PLAYER")
        },
        turn({commit}, cell) {
            const data = cell.col + "" + cell.row
            commit("MAKE_MOVE", data)
            commit("TOGGLE_PLAYER")
        }
    },
    modules: {},
    mutations: {
        TOGGLE_PLAYER(state) {
            state.nextPlayer = state.nextPlayer == 'x' ? 'o' : 'x';
        },
        SET_NEXT_PLAYER(state, payload) {
            state.nextPlayer = payload
        },
        MAKE_MOVE(state, payload) {
            let winner = "";
            if(state.nextPlayer == 'o') {
                state.fields.o.push(payload)

                if(state.fields.o.filter(temp => temp == "11").length > 0) {
                    if(state.fields.o.filter(temp => temp == "21").length > 0) {
                        if(state.fields.o.filter(temp => temp == "31").length > 0) {
                            winner = "o"
                        }
                    }
                    if(state.fields.o.filter(temp => temp == "12").length > 0) {
                        if(state.fields.o.filter(temp => temp == "13").length > 0) {
                            winner = "o"
                        }
                    }
                    if(state.fields.o.filter(temp => temp == "22").length > 0) {
                        if(state.fields.o.filter(temp => temp == "33").length > 0) {
                            winner = "o"
                        }
                    }
                }
                if(state.fields.o.filter(temp => temp == "21").length > 0) {
                    if(state.fields.o.filter(temp => temp == "22").length > 0) {
                        if(state.fields.o.filter(temp => temp == "23").length > 0) {
                            winner = "o"
                        }
                    }
                }
                if(state.fields.o.filter(temp => temp == "31").length > 0) {
                    if(state.fields.o.filter(temp => temp == "32").length > 0) {
                        if(state.fields.o.filter(temp => temp == "33").length > 0) {
                            winner = "o"
                        }
                    }
                    if(state.fields.o.filter(temp => temp == "22").length > 0) {
                        if(state.fields.o.filter(temp => temp == "13").length > 0) {
                            winner = "o"
                        }
                    }
                }
                if(state.fields.o.filter(temp => temp == "12").length > 0) {
                    if (state.fields.o.filter(temp => temp == "22").length > 0) {
                        if (state.fields.o.filter(temp => temp == "32").length > 0) {
                            winner = "o"
                        }
                    }
                }
                if(state.fields.o.filter(temp => temp == "13").length > 0) {
                    if (state.fields.o.filter(temp => temp == "23").length > 0) {
                        if (state.fields.o.filter(temp => temp == "33").length > 0) {
                            winner = "o"
                        }
                    }
                }
            } else {
                state.fields.x.push(payload)

                if(state.fields.x.filter(temp => temp == "11").length > 0) {
                    if(state.fields.x.filter(temp => temp == "21").length > 0) {
                        if(state.fields.x.filter(temp => temp == "31").length > 0) {
                            winner = "x"
                        }
                    }
                    if(state.fields.x.filter(temp => temp == "12").length > 0) {
                        if(state.fields.x.filter(temp => temp == "13").length > 0) {
                            winner = "x"
                        }
                    }
                    if(state.fields.x.filter(temp => temp == "22").length > 0) {
                        if(state.fields.x.filter(temp => temp == "33").length > 0) {
                            winner = "x"
                        }
                    }
                }
                if(state.fields.x.filter(temp => temp == "21").length > 0) {
                    if(state.fields.x.filter(temp => temp == "22").length > 0) {
                        if(state.fields.x.filter(temp => temp == "23").length > 0) {
                            winner = "x"
                        }
                    }
                }
                if(state.fields.x.filter(temp => temp == "31").length > 0) {
                    if(state.fields.x.filter(temp => temp == "32").length > 0) {
                        if(state.fields.x.filter(temp => temp == "33").length > 0) {
                            winner = "x"
                        }
                    }
                    if(state.fields.x.filter(temp => temp == "22").length > 0) {
                        if(state.fields.x.filter(temp => temp == "13").length > 0) {
                            winner = "x"
                        }
                    }
                }
                if(state.fields.x.filter(temp => temp == "12").length > 0) {
                    if (state.fields.x.filter(temp => temp == "22").length > 0) {
                        if (state.fields.x.filter(temp => temp == "32").length > 0) {
                            winner = "x"
                        }
                    }
                }
                if(state.fields.x.filter(temp => temp == "13").length > 0) {
                    if (state.fields.x.filter(temp => temp == "23").length > 0) {
                        if (state.fields.x.filter(temp => temp == "33").length > 0) {
                            winner = "x"
                        }
                    }
                }
            }

            if(winner != "") {
                console.log("Spieler " + winner + " hat gewonnen")
            }
            console.log(state.fields)
        }
    },
}

export default game