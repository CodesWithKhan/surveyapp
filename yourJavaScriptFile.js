document.addEventListener("DOMContentLoaded", function () {
const sections = [
    {
        name: 'Boldness',
        questions: [
            {
                question: "When faced with a new and challenging opportunity, do you typically embrace it with excitement or hesitation?",
                options: [
                    { text: "I embrace new opportunities with excitement.", value: 100 },
                    { text: "I approach new opportunities cautiously.", value: 50 },
                    { text: "I tend to hesitate when presented with new opportunities.", value: 0 }
                ]
            },
            {
                question: "How do you typically react when someone asks for help or assistance?",
                options: [
                    { text: "I often hesitate or decline to help.", value: 100 },
                    { text: "I help when I can, but it depends on the situation.", value: 50 },
                    { text: "I'm always willing to help and offer support.", value: 0 }
                ]
            },
            {
                question: "How often do you find yourself engaging in spontaneous or impulsive activities without much forethought?",
                options: [
                    { text: "I frequently engage in spontaneous activities.", value: 100 },
                    { text: "I engage in spontaneous activities occasionally.", value: 50 },
                    { text: "I rarely engage in spontaneous activities.", value: 0 }
                ]
            },
            {
                question: "Are you comfortable communicating and interacting with people from diverse backgrounds?",
                options: [
                    { text: "Yes, I'm comfortable communicating with diverse groups.", value: 100 },
                    { text: "I'm mostly comfortable, but it can be challenging.", value: 50 },
                    { text: "No, I struggle with diverse interactions.", value: 0 }
                ]
            },
            {
                question: "Do you enjoy solving puzzles, brainteasers, or logic games?",
                options: [
                    { text: "Yes, I love them.", value: 100 },
                    { text: "I enjoy them occasionally.", value: 50 },
                    { text: "No, I'm not particularly interested.", value: 0 }
                ]
            },
            {
                question: "When you're given directions, do you find it easy to mentally visualize the route and landmarks?",
                options: [
                    { text: "Yes, I can visualize directions easily.", value: 100 },
                    { text: "I can do it to some extent.", value: 50 },
                    { text: "No, I struggle with visualizing directions.", value: 0 }
                ]
            },
            {
                question: "Do you often find yourself humming, tapping your fingers, or moving to the rhythm of music without realizing it?",
                options: [
                    { text: "Yes, I frequently do that.", value: 100 },
                    { text: "I do it occasionally.", value: 50 },
                    { text: "No, I don't do it often.", value: 0 }
                ]
            },
            {
                question: "Do you enjoy participating in physical activities such as sports, dancing, or outdoor adventures?",
                options: [
                    { text: "Yes, I love physical activities.", value: 100 },
                    { text: "I enjoy them occasionally.", value: 50 },
                    { text: "No, I'm not interested in physical activities.", value: 0 }
                ]
            },
            {
                question: "Do you often find it easy to empathize with other people's emotions and understand their perspectives?",
                options: [
                    { text: "Yes, I'm empathetic and understanding.", value: 100 },
                    { text: "I can empathize to some extent.", value: 50 },
                    { text: "No, I struggle with empathizing.", value: 0 }
                ]
            },
            {
                question: "Do you often engage in self-reflection and spend time thinking about your own thoughts, feelings, and experiences?",
                options: [
                    { text: "Yes, I frequently engage in self-reflection.", value: 100 },
                    { text: "I do it occasionally.", value: 50 },
                    { text: "No, I don't often engage in self-reflection.", value: 0 }
                ]
            }
        ]
    },

    {
        name: "Meanness",
        questions: [
            {
                question: "Do you feel a strong sense of connection and appreciation for nature and the outdoors?",
                options: [
                    { text: "Yes, I feel deeply connected to nature.", value: 100 },
                    { text: "I have some appreciation for nature.", value: 50 },
                    { text: "No, I don't have a strong connection to nature.", value: 0 }
                ]
            },
            {
                question: "Do you often contemplate abstract concepts, such as the meaning of life, the nature of reality, or the purpose of human existence?",
                options: [
                    { text: "Yes, I frequently contemplate these concepts.", value: 100 },
                    { text: "I engage in such contemplation occasionally.", value: 50 },
                    { text: "No, I don't often contemplate these concepts.", value: 0 }
                ]
            },
            {
                question: "Do you often find yourself coming up with unique solutions to problems that others might not have considered?",
                options: [
                    { text: "Yes, I frequently come up with innovative solutions.", value: 100 },
                    { text: "I come up with creative solutions occasionally.", value: 50 },
                    { text: "No, I don't often come up with unique solutions.", value: 0 }
                ]
            },
            {
                question: "How do you react when faced with a situation where telling the truth might have negative consequences?",
                options: [
                    { text: "I might consider not telling the truth if it avoids negative consequences.", value: 100 },
                    { text: "I tend to tell the truth, but there are exceptions.", value: 50 },
                    { text: "I always prioritize telling the truth, even if it leads to negative outcomes.", value: 0 }
                ]
            },
            {
                question: "Have you ever taken a spontaneous trip or engaged in an unplanned adventure on a whim?",
                options: [
                    { text: "Yes, I've done that multiple times.", value: 100 },
                    { text: "I've done it a couple of times.", value: 50 },
                    { text: "No, I rarely or never take spontaneous trips.", value: 0 }
                ]
            },
            {
                question: "How do you handle disagreements or conflicts with others?",
                options: [
                    { text: "I tend to get confrontational or defensive during conflicts.", value: 100 },
                    { text: "I try to find common ground, but conflicts can be difficult.", value: 50 },
                    { text: "I aim for open communication and resolution.", value: 0 }
                ]
            },
            {
                question: "How comfortable are you with expressing your thoughts and feelings openly, even in unfamiliar or public settings?",
                options: [
                    { text: "I'm very comfortable expressing myself openly.", value: 100 },
                    { text: "I'm somewhat comfortable expressing myself.", value: 50 },
                    { text: "I'm cautious about expressing myself in unfamiliar settings.", value: 0 }
                ]
            },
            {
                question: "Do you enjoy reading books, articles, or written material regularly?",
                options: [
                    { text: "Yes, I love reading.", value: 100 },
                    { text: "I read occasionally.", value: 50 },
                    { text: "No, I rarely read.", value: 0 }
                ]
            },
            {
                question: "When faced with a complex problem, do you feel confident in your ability to analyze it and find a solution?",
                options: [
                    { text: "Yes, I'm confident in my problem-solving skills.", value: 100 },
                    { text: "I feel reasonably confident.", value: 50 },
                    { text: "No, I often struggle with problem-solving.", value: 0 }
                ]
            },
            {
                question: "Do you enjoy activities such as drawing, painting, sculpting, or creating visual art?",
                options: [
                    { text: "Yes, I enjoy visual arts.", value: 100 },
                    { text: "I engage in visual arts occasionally.", value: 50 },
                    { text: "No, I'm not interested in visual arts.", value: 0 }
                ]
            }
        ]
    },

    // {
    //     name: "Disinhibition",
    //     questions: [
    //         {
    //             question: "Are you drawn to a variety of musical genres and enjoy exploring different styles of music?",
    //             options: [
    //                 { text: "Yes, I love exploring diverse musical genres.", value: 100 },
    //                 { text: "I enjoy listening to various styles.", value: 50 },
    //                 { text: "No, I stick to my preferred genre.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you skilled at using your body to create expressive movements, gestures, or dance routines?",
    //             options: [
    //                 { text: "Yes, I'm skilled at expressing through movement.", value: 100 },
    //                 { text: "I can express myself through movement to some extent.", value: 50 },
    //                 { text: "No, I'm not comfortable with expressive movements.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable in social situations and enjoy interacting with a diverse range of people?",
    //             options: [
    //                 { text: "Yes, I'm very comfortable in social settings.", value: 100 },
    //                 { text: "I'm comfortable in social settings, but I have my moments.", value: 50 },
    //                 { text: "No, I'm not comfortable in social settings.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you able to identify your strengths, weaknesses, and personal qualities with a high level of accuracy?",
    //             options: [
    //                 { text: "Yes, I have a good understanding of my strengths and weaknesses.", value: 100 },
    //                 { text: "I can identify some of my strengths and weaknesses.", value: 50 },
    //                 { text: "No, I struggle to identify my strengths and weaknesses.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to activities like gardening, hiking, or observing wildlife?",
    //             options: [
    //                 { text: "Yes, I enjoy engaging in outdoor activities.", value: 100 },
    //                 { text: "I find these activities interesting but don't do them often.", value: 50 },
    //                 { text: "No, I'm not interested in these activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to philosophical discussions and enjoy exploring deep questions about the universe and human existence?",
    //             options: [
    //                 { text: "Yes, I enjoy philosophical discussions.", value: 100 },
    //                 { text: "I'm interested in them but don't often engage.", value: 50 },
    //                 { text: "No, I'm not particularly interested in philosophical discussions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to creative activities such as drawing, painting, writing, or crafting?",
    //             options: [
    //                 { text: "Yes, I enjoy engaging in creative activities.", value: 100 },
    //                 { text: "I engage in creative activities occasionally.", value: 50 },
    //                 { text: "No, I'm not particularly interested in creative activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How often do you find yourself being completely truthful, even in small or insignificant matters?",
    //             options: [
    //                 { text: "Not always, I've told small lies to avoid inconvenience.", value: 100 },
    //                 { text: "Mostly, but I've occasionally stretched the truth.", value: 50 },
    //                 { text: "Always, I believe in being truthful in all situations.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How comfortable are you with expressing your opinions, even when they differ from the majority?",
    //             options: [
    //                 { text: "I'm very comfortable expressing my opinions.", value: 100 },
    //                 { text: "I'm somewhat comfortable expressing differing opinions.", value: 50 },
    //                 { text: "I'm hesitant to express opinions that differ from others.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable giving constructive feedback without being hurtful or critical?",
    //             options: [
    //                 { text: "No, I struggle with giving feedback without being critical.", value: 100 },
    //                 { text: "I can provide feedback, but it's not always easy.", value: 50 },
    //                 { text: "Yes, I'm skilled at providing constructive feedback.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Linguistic Intelligence",
    //     questions: [
    //         {
    //             question: "How likely are you to try new things or experiences without worrying about potential risks or consequences?",
    //             options: [
    //                 { text: "I'm very open to trying new things.", value: 100 },
    //                 { text: "I'm open to trying new things but with some caution.", value: 50 },
    //                 { text: "I prefer sticking to familiar activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you often the person people turn to for help with writing, editing, or proofreading tasks?",
    //             options: [
    //                 { text: "Yes, I'm often asked for help.", value: 100 },
    //                 { text: "Sometimes, on certain occasions.", value: 50 },
    //                 { text: "No, not really.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to subjects that involve mathematics, statistics, or quantitative analysis?",
    //             options: [
    //                 { text: "Yes, I'm drawn to these subjects.", value: 100 },
    //                 { text: "I have some interest in them.", value: 50 },
    //                 { text: "No, I'm not interested in these subjects.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you good at reading and creating maps, diagrams, and blueprints?",
    //             options: [
    //                 { text: "Yes, I'm skilled at reading and creating them.", value: 100 },
    //                 { text: "I can understand them but may need some guidance.", value: 50 },
    //                 { text: "No, I have difficulty with maps and diagrams.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you distinguish between different musical instruments when listening to a song?",
    //             options: [
    //                 { text: "Yes, I can easily identify instruments.", value: 100 },
    //                 { text: "I can identify some instruments.", value: 50 },
    //                 { text: "No, I struggle to differentiate between instruments.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily learn and perform tasks that require precise hand-eye coordination, such as assembling intricate objects or performing surgical procedures (if applicable)?",
    //             options: [
    //                 { text: "Yes, I excel in tasks requiring coordination.", value: 100 },
    //                 { text: "I can perform coordinated tasks with effort.", value: 50 },
    //                 { text: "No, I struggle with tasks requiring coordination.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you intuitively sense the moods and feelings of those around you, even without them explicitly expressing themselves?",
    //             options: [
    //                 { text: "Yes, I'm sensitive to others' moods.", value: 100 },
    //                 { text: "I can sense moods to some extent.", value: 50 },
    //                 { text: "No, I don't often pick up on moods.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily recognize your emotions and understand how they influence your thoughts and behaviors?",
    //             options: [
    //                 { text: "Yes, I'm adept at recognizing my emotions.", value: 100 },
    //                 { text: "I can recognize emotions to some extent.", value: 50 },
    //                 { text: "No, I struggle to recognize my emotions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily recognize different plant and animal species and their characteristics?",
    //             options: [
    //                 { text: "Yes, I'm knowledgeable about various species.", value: 100 },
    //                 { text: "I can identify some species.", value: 50 },
    //                 { text: "No, I'm not well-versed in identifying species.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily grasp complex and abstract ideas that involve thinking beyond the material world?",
    //             options: [
    //                 { text: "Yes, I can understand and engage with abstract ideas.", value: 100 },
    //                 { text: "I can understand them to some extent.", value: 50 },
    //                 { text: "No, I struggle with understanding abstract ideas.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Logical-mathematical intelligence",
    //     questions: [
    //         {
    //             question: "Can you easily connect seemingly unrelated concepts and ideas to create something new and original?",
    //             options: [
    //                 { text: "Yes, I'm adept at making unique connections.", value: 100 },
    //                 { text: "I can make connections to some extent.", value: 50 },
    //                 { text: "No, I struggle to make such connections.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you feel when you discover that someone has lied to you?",
    //             options: [
    //                 { text: "I don't feel strongly about it, as lying is a common behavior.", value: 100 },
    //                 { text: "I feel uncomfortable, but I understand that people have their reasons.", value: 50 },
    //                 { text: "I feel deeply disappointed and hurt by dishonesty.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you open to trying new activities, even if they push you out of your comfort zone?",
    //             options: [
    //                 { text: "Yes, I love trying new activities.", value: 100 },
    //                 { text: "I'm open to new activities but with some caution.", value: 50 },
    //                 { text: "No, I prefer sticking to familiar activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you consider the feelings and emotions of others before making decisions or taking actions?",
    //             options: [
    //                 { text: "No, I often overlook others' feelings.", value: 100 },
    //                 { text: "I consider them to some extent.", value: 50 },
    //                 { text: "Yes, I prioritize others' feelings and emotions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How often do you find yourself sharing personal information or details with people you've just met?",
    //             options: [
    //                 { text: "I often share personal information with new people.", value: 100 },
    //                 { text: "I occasionally share personal information with new people.", value: 50 },
    //                 { text: "I rarely share personal information with new people.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy engaging in debates, discussions, or public speaking?",
    //             options: [
    //                 { text: "Yes, I enjoy it.", value: 100 },
    //                 { text: "I'm comfortable with it, but I don't seek it out.", value: 50 },
    //                 { text: "No, I'm not comfortable with public speaking.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily recognize patterns, sequences, and relationships between numbers or objects?",
    //             options: [
    //                 { text: "Yes, I'm adept at recognizing patterns.", value: 100 },
    //                 { text: "I can recognize patterns to some extent.", value: 50 },
    //                 { text: "No, I struggle with recognizing patterns.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily imagine how objects will look from different angles or perspectives?",
    //             options: [
    //                 { text: "Yes, I have a vivid imagination for spatial arrangements.", value: 100 },
    //                 { text: "I can do it to some extent.", value: 50 },
    //                 { text: "No, I struggle to visualize objects from different angles.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you have a good sense of pitch, able to recognize when a note is in tune or not?",
    //             options: [
    //                 { text: "Yes, I have a strong sense of pitch.", value: 100 },
    //                 { text: "I can recognize pitch to some extent.", value: 50 },
    //                 { text: "No, I struggle with recognizing pitch.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you have good spatial awareness and are able to navigate through physical spaces with ease?",
    //             options: [
    //                 { text: "Yes, I have excellent spatial awareness.", value: 100 },
    //                 { text: "I'm comfortable with spatial awareness.", value: 50 },
    //                 { text: "No, I struggle with spatial awareness.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Spatial Intelligence",
    //     questions: [
    //         {
    //             question: "Are you often the person friends and family turn to for advice or emotional support?",
    //             options: [
    //                 { text: "Yes, I'm a good listener and advisor.", value: 100 },
    //                 { text: "People do come to me for advice sometimes.", value: 50 },
    //                 { text: "No, I'm not often sought out for advice.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable with spending time alone and find it enriching rather than isolating?",
    //             options: [
    //                 { text: "Yes, I enjoy spending time alone.", value: 100 },
    //                 { text: "I'm comfortable with solitude but also enjoy socializing.", value: 50 },
    //                 { text: "No, I prefer being around others.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you have a keen understanding of ecosystems, environmental issues, and the interdependence of living organisms?",
    //             options: [
    //                 { text: "Yes, I have a strong understanding of ecosystems.", value: 100 },
    //                 { text: "I have some knowledge about ecosystems.", value: 50 },
    //                 { text: "No, I don't know much about ecosystems.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever explored spiritual or metaphysical beliefs, regardless of whether you subscribe to them or not?",
    //             options: [
    //                 { text: "Yes, I've explored different spiritual and metaphysical beliefs.", value: 100 },
    //                 { text: "I've explored some beliefs out of curiosity.", value: 50 },
    //                 { text: "No, I haven't explored such beliefs.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy brainstorming sessions and group discussions where new ideas are encouraged and explored?",
    //             options: [
    //                 { text: "Yes, I thrive in brainstorming sessions.", value: 100 },
    //                 { text: "I enjoy them occasionally.", value: 50 },
    //                 { text: "No, I don't particularly enjoy brainstorming.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever lied to avoid getting into trouble or facing the consequences of your actions?",
    //             options: [
    //                 { text: "Yes, I've done it frequently to avoid trouble.", value: 100 },
    //                 { text: "Yes, I've done it a couple of times.", value: 50 },
    //                 { text: "No, I've always faced the consequences of my actions truthfully.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever pursued a goal or ambition that others considered risky or unconventional?",
    //             options: [
    //                 { text: "Yes, I've pursued risky or unconventional goals.", value: 100 },
    //                 { text: "I've pursued such goals occasionally.", value: 50 },
    //                 { text: "No, I tend to avoid risky or unconventional goals.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you react when someone makes a mistake or does something wrong?",
    //             options: [
    //                 { text: "I tend to blame or criticize them.", value: 100 },
    //                 { text: "I may get frustrated, but I try to be patient.", value: 50 },
    //                 { text: "I offer support and understanding.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you frequently engage in behaviors such as excessive spending, overeating, or substance use without much consideration of the consequences?",
    //             options: [
    //                 { text: "Yes, I engage in such behaviors frequently.", value: 100 },
    //                 { text: "I engage in them occasionally.", value: 50 },
    //                 { text: "No, I don't engage in these behaviors often.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you able to pick up new languages relatively easily?",
    //             options: [
    //                 { text: "Yes, I learn languages quickly.", value: 100 },
    //                 { text: "I can learn languages with some effort.", value: 50 },
    //                 { text: "No, I struggle with learning new languages.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Musical Intelligence",
    //     questions: [
    //         {
    //             question: "Are you comfortable working with abstract concepts, equations, and formulas?",
    //             options: [
    //                 { text: "Yes, I'm comfortable with abstraction.", value: 100 },
    //                 { text: "I can work with them, but it's challenging at times.", value: 50 },
    //                 { text: "No, I find them difficult to work with.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you skilled at assembling or building things using diagrams or instructions?",
    //             options: [
    //                 { text: "Yes, I'm good at assembling things.", value: 100 },
    //                 { text: "I can do it with some effort.", value: 50 },
    //                 { text: "No, I find it challenging to follow diagrams.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever played a musical instrument or sung in a choir?",
    //             options: [
    //                 { text: "Yes, I play an instrument or sing.", value: 100 },
    //                 { text: "I have played an instrument or sung in the past.", value: 50 },
    //                 { text: "No, I haven't played an instrument or sung.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to artistic activities that involve using your hands, such as painting, sculpting, or crafting?",
    //             options: [
    //                 { text: "Yes, I enjoy hands-on artistic activities.", value: 100 },
    //                 { text: "I engage in hands-on activities occasionally.", value: 50 },
    //                 { text: "No, I'm not interested in hands-on art.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy collaborating with others on group projects or activities?",
    //             options: [
    //                 { text: "Yes, I thrive in group collaborations.", value: 100 },
    //                 { text: "I'm comfortable with group collaborations.", value: 50 },
    //                 { text: "No, I prefer working alone.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you have a clear sense of your long-term goals, aspirations, and the direction you want your life to take?",
    //             options: [
    //                 { text: "Yes, I have a well-defined sense of purpose.", value: 100 },
    //                 { text: "I have some goals, but they're not fully defined.", value: 50 },
    //                 { text: "No, I'm unsure about my long-term goals.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often notice natural phenomena, such as changes in weather patterns, seasonal shifts, or geological formations?",
    //             options: [
    //                 { text: "Yes, I frequently observe natural phenomena.", value: 100 },
    //                 { text: "I notice them occasionally.", value: 50 },
    //                 { text: "No, I don't often observe natural phenomena.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable with the idea of uncertainty and the unknown, and do you often explore these concepts in your thinking?",
    //             options: [
    //                 { text: "Yes, I'm comfortable with uncertainty and explore it.", value: 100 },
    //                 { text: "I'm open to uncertainty but don't actively explore it.", value: 50 },
    //                 { text: "No, I find uncertainty unsettling.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever taken a novel approach to solving a problem, diverging from the conventional methods?",
    //             options: [
    //                 { text: "Yes, I've taken unconventional approaches.", value: 100 },
    //                 { text: "I've tried unconventional approaches occasionally.", value: 50 },
    //                 { text: "No, I usually stick to conventional methods.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you adapt your behavior and mindset to different situations and contexts, maintaining a sense of authenticity?",
    //             options: [
    //                 { text: "Yes, I'm adaptable while staying true to myself.", value: 100 },
    //                 { text: "I'm somewhat adaptable to different situations.", value: 50 },
    //                 { text: "No, I find it challenging to adapt my behavior.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Bodily-Kinesthetic Intelligence",
    //     questions: [
    //         {
    //             question: "How important is trustworthiness and honesty to you in building and maintaining relationships?",
    //             options: [
    //                 { text: "Not very important, relationships can survive without complete honesty.", value: 100 },
    //                 { text: "Somewhat important, but there are other factors too.", value: 50 },
    //                 { text: "Very important, trust is the foundation of strong relationships.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you feel about public speaking or performing in front of an audience?",
    //             options: [
    //                 { text: "I'm comfortable and even enjoy it.", value: 100 },
    //                 { text: "I'm okay with it but get nervous.", value: 50 },
    //                 { text: "I'm uncomfortable with public speaking or performing.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you empathetic and understanding of others' challenges and hardships?",
    //             options: [
    //                 { text: "No, I struggle to empathize with others.", value: 100 },
    //                 { text: "I try to be empathetic, but it's not always easy.", value: 50 },
    //                 { text: "Yes, I'm empathetic and supportive.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable with taking risks, even if they could lead to negative outcomes?",
    //             options: [
    //                 { text: "Yes, I'm comfortable with taking risks.", value: 100 },
    //                 { text: "I'm open to some risks but not extreme ones.", value: 50 },
    //                 { text: "No, I prefer avoiding risks.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you find it easy to use metaphors, analogies, or wordplay to explain complex concepts?",
    //             options: [
    //                 { text: "Yes, I often use them.", value: 100 },
    //                 { text: "I use them occasionally.", value: 50 },
    //                 { text: "No, I don't use them much.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy working with data, analyzing trends, and drawing conclusions from information?",
    //             options: [
    //                 { text: "Yes, I find data analysis intriguing.", value: 100 },
    //                 { text: "I'm interested in it, but I'm not an expert.", value: 50 },
    //                 { text: "No, I'm not interested in data analysis.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often notice details in your environment, such as the arrangement of objects or changes in spatial relationships?",
    //             options: [
    //                 { text: "Yes, I'm observant of spatial details.", value: 100 },
    //                 { text: "I notice details occasionally.", value: 50 },
    //                 { text: "No, I don't pay much attention to spatial details.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you identify changes in tempo, rhythm, and timing in a piece of music?",
    //             options: [
    //                 { text: "Yes, I'm skilled at recognizing musical changes.", value: 100 },
    //                 { text: "I can identify some changes.", value: 50 },
    //                 { text: "No, I have difficulty recognizing musical changes.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever engaged in activities that require fine motor skills, such as playing a musical instrument or crafting intricate objects?",
    //             options: [
    //                 { text: "Yes, I have engaged in such activities.", value: 100 },
    //                 { text: "I have tried them occasionally.", value: 50 },
    //                 { text: "No, I haven't tried activities requiring fine motor skills.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you effectively resolve conflicts and mediate disagreements between others?",
    //             options: [
    //                 { text: "Yes, I'm skilled at conflict resolution.", value: 100 },
    //                 { text: "I can mediate conflicts to some extent.", value: 50 },
    //                 { text: "No, I struggle with conflict resolution.", value: 0 }
    //             ]
    //         },
    //     ]
    // },

    // {
    //     name: "Interpersonal Intelligence",
    //     questions: [
    //         {
    //             question: "Are you interested in learning about sustainability, conservation, and ways to protect the environment?",
    //             options: [
    //                 { text: "Yes, I'm passionate about environmental issues.", value: 100 },
    //                 { text: "I have some interest in environmental topics.", value: 50 },
    //                 { text: "No, I'm not particularly interested in environmental issues.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often seek out literature, art, or media that delve into existential themes and explore the human condition?",
    //             options: [
    //                 { text: "Yes, I'm drawn to existential themes in literature and art.", value: 100 },
    //                 { text: "I find such themes interesting but don't always seek them out.", value: 50 },
    //                 { text: "No, I'm not particularly interested in existential themes.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you interested in experimenting with different artistic techniques or innovative technologies to create something new?",
    //             options: [
    //                 { text: "Yes, I enjoy experimenting with new techniques and technologies.", value: 100 },
    //                 { text: "I experiment occasionally.", value: 50 },
    //                 { text: "No, I prefer sticking to familiar techniques.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often find yourself embellishing stories or exaggerating details to make them more interesting?",
    //             options: [
    //                 { text: "Yes, I often add details to make stories more engaging.", value: 100 },
    //                 { text: "Occasionally, if it enhances the story.", value: 50 },
    //                 { text: "No, I prefer to stick to the truth in my stories.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Would you be willing to challenge authority or established norms if you believed it was necessary?",
    //             options: [
    //                 { text: "Yes, I'm willing to challenge authority or norms.", value: 100 },
    //                 { text: "I might challenge them under certain circumstances.", value: 50 },
    //                 { text: "No, I'm reluctant to challenge authority or norms.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you handle situations where you have to deliver news that might be disappointing or difficult for someone?",
    //             options: [
    //                 { text: "I tend to be blunt or insensitive.", value: 100 },
    //                 { text: "I find it challenging, but I try to be considerate.", value: 50 },
    //                 { text: "I deliver the news compassionately and gently.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How often do you find yourself blurting out thoughts or comments without thinking them through?",
    //             options: [
    //                 { text: "I often speak without thinking.", value: 100 },
    //                 { text: "I sometimes speak impulsively.", value: 50 },
    //                 { text: "I rarely speak impulsively.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you prefer to learn new information or concepts?",
    //             options: [
    //                 { text: "By reading and studying materials.", value: 100 },
    //                 { text: "By listening to explanations and discussions.", value: 50 },
    //                 { text: "A mix of reading, listening, and discussions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "When faced with a problem, do you tend to approach it methodically and step-by-step?",
    //             options: [
    //                 { text: "Yes, I prefer a methodical approach.", value: 100 },
    //                 { text: "I use a mix of methods.", value: 50 },
    //                 { text: "No, I approach problems more creatively.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to activities that involve working with three-dimensional objects, such as puzzles or 3D modeling?",
    //             options: [
    //                 { text: "Yes, I enjoy working with 3D objects.", value: 100 },
    //                 { text: "I find them interesting but don't engage often.", value: 50 },
    //                 { text: "No, I'm not particularly interested.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Intrapersonal Intelligence",
    //     questions: [
    //         {
    //             question: "Do you enjoy creating your own music, whether it's composing melodies, writing lyrics, or improvising?",
    //             options: [
    //                 { text: "Yes, I enjoy creating music.", value: 100 },
    //                 { text: "I dabble in music creation occasionally.", value: 50 },
    //                 { text: "No, I'm not interested in creating music.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy learning by doing, and do you find hands-on experiences more effective for your learning?",
    //             options: [
    //                 { text: "Yes, I prefer hands-on learning.", value: 100 },
    //                 { text: "I find hands-on learning effective to some extent.", value: 50 },
    //                 { text: "No, I prefer other learning methods.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to careers or activities that involve working closely with people, such as counseling, teaching, or team leadership?",
    //             options: [
    //                 { text: "Yes, I'm drawn to such careers and activities.", value: 100 },
    //                 { text: "I find them interesting but haven't pursued them.", value: 50 },
    //                 { text: "No, I'm not interested in people-oriented careers.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever pursued personal development activities like journaling, meditation, or self-help practices?",
    //             options: [
    //                 { text: "Yes, I actively engage in personal development.", value: 100 },
    //                 { text: "I've tried personal development practices occasionally.", value: 50 },
    //                 { text: "No, I haven't explored personal development practices.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever participated in activities related to environmental advocacy or conservation efforts?",
    //             options: [
    //                 { text: "Yes, I have been involved in such activities.", value: 100 },
    //                 { text: "I've participated occasionally.", value: 50 },
    //                 { text: "No, I haven't been involved in such activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you describe your personal beliefs about the nature of reality and existence, even if they are still evolving?",
    //             options: [
    //                 { text: "Yes, I have well-defined beliefs about reality and existence.", value: 100 },
    //                 { text: "I have some beliefs but they are still evolving.", value: 50 },
    //                 { text: "No, I'm not sure about my beliefs regarding reality and existence.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily visualize scenarios that don't currently exist and imagine potential outcomes?",
    //             options: [
    //                 { text: "Yes, I can vividly imagine different scenarios.", value: 100 },
    //                 { text: "I can imagine scenarios to some extent.", value: 50 },
    //                 { text: "No, I have difficulty imagining different scenarios.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you feel about telling white lies or half-truths to spare someone's feelings?",
    //             options: [
    //                 { text: "I'm comfortable using white lies to maintain harmony.", value: 100 },
    //                 { text: "I've told white lies occasionally to avoid hurting someone.", value: 50 },
    //                 { text: "I avoid white lies and try to be honest even in sensitive situations.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever taken significant financial or career risks to pursue your passions or dreams?",
    //             options: [
    //                 { text: "Yes, I've taken major financial or career risks.", value: 100 },
    //                 { text: "I've taken some risks, but not major ones.", value: 50 },
    //                 { text: "No, I avoid major financial or career risks.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you willing to apologize when you've hurt someone's feelings or made a mistake?",
    //             options: [
    //                 { text: "No, I find it hard to apologize or admit mistakes.", value: 100 },
    //                 { text: "I apologize when necessary, but it's not easy.", value: 50 },
    //                 { text: "Yes, I'm open to apologizing and making amends.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Naturalistic Intelligence",
    //     questions: [
    //         {
    //             question: "How do you handle situations that require self-control, especially when you're tempted to act on immediate desires?",
    //             options: [
    //                 { text: "I struggle with self-control in such situations.", value: 100 },
    //                 { text: "I can exercise self-control, but it's challenging.", value: 50 },
    //                 { text: "I have strong self-control and can resist temptations.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy storytelling, either as a listener or a teller?",
    //             options: [
    //                 { text: "Yes, I love storytelling.", value: 100 },
    //                 { text: "I enjoy it occasionally.", value: 50 },
    //                 { text: "No, I'm not particularly interested.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often find yourself questioning assumptions and seeking logical explanations for phenomena?",
    //             options: [
    //                 { text: "Yes, I frequently question assumptions.", value: 100 },
    //                 { text: "I do so occasionally.", value: 50 },
    //                 { text: "No, I tend to accept things as they are.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily visualize how a room or space will look after rearranging furniture or making changes?",
    //             options: [
    //                 { text: "Yes, I can visualize it accurately.", value: 100 },
    //                 { text: "I can imagine it to some extent.", value: 50 },
    //                 { text: "No, I have difficulty visualizing spatial changes.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you memorize melodies, lyrics, or musical patterns easily?",
    //             options: [
    //                 { text: "Yes, I have a strong memory for music.", value: 100 },
    //                 { text: "I can memorize music to some extent.", value: 50 },
    //                 { text: "No, I struggle to memorize music.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you quickly adapt to new physical challenges or activities, even if you haven't done them before?",
    //             options: [
    //                 { text: "Yes, I adapt to physical challenges easily.", value: 100 },
    //                 { text: "I can adapt with some effort.", value: 50 },
    //                 { text: "No, I have difficulty adapting to new physical activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often initiate and maintain deep, meaningful relationships with a wide range of individuals?",
    //             options: [
    //                 { text: "Yes, I have many deep relationships.", value: 100 },
    //                 { text: "I have a few deep relationships.", value: 50 },
    //                 { text: "No, I don't typically form deep relationships.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you aware of your values and beliefs, and do you align your actions with them?",
    //             options: [
    //                 { text: "Yes, I'm in tune with my values and beliefs.", value: 100 },
    //                 { text: "I'm aware of my values but don't always align perfectly.", value: 50 },
    //                 { text: "No, I'm not sure about my values and beliefs.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily identify different types of landscapes, such as forests, deserts, oceans, and mountains?",
    //             options: [
    //                 { text: "Yes, I can identify various landscapes.", value: 100 },
    //                 { text: "I can identify some landscapes.", value: 50 },
    //                 { text: "No, I struggle to identify different landscapes.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often engage in deep introspection and ponder your role in the grand scheme of things?",
    //             options: [
    //                 { text: "Yes, I frequently engage in introspection.", value: 100 },
    //                 { text: "I engage in introspection occasionally.", value: 50 },
    //                 { text: "No, I don't often engage in introspection.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Existential Intelligence",
    //     questions: [
    //         {
    //             question: "Do you enjoy immersing yourself in creative projects, even if they require significant time and effort?",
    //             options: [
    //                 { text: "Yes, I'm passionate about creative projects.", value: 100 },
    //                 { text: "I enjoy creative projects but balance them with other activities.", value: 50 },
    //                 { text: "No, I don't invest much time in creative projects.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever lied about your accomplishments or experiences to make yourself appear more impressive?",
    //             options: [
    //                 { text: "Yes, I regularly embellish my accomplishments.", value: 100 },
    //                 { text: "Yes, I've exaggerated a few times to impress others.", value: 50 },
    //                 { text: "No, I'm honest about my accomplishments and experiences.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you respond to setbacks or failures? Do you bounce back quickly and learn from them?",
    //             options: [
    //                 { text: "Yes, I quickly recover from setbacks and learn from them.", value: 100 },
    //                 { text: "I eventually recover from setbacks and learn.", value: 50 },
    //                 { text: "No, setbacks tend to affect me deeply.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How do you react when someone achieves success or accomplishes something significant?",
    //             options: [
    //                 { text: "I often downplay their achievements or criticize them.", value: 100 },
    //                 { text: "I acknowledge their accomplishments, but I may feel envious.", value: 50 },
    //                 { text: "I genuinely celebrate their achievements.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you find it easy to adapt to social norms and conventions, or do you tend to go against the grain?",
    //             options: [
    //                 { text: "I often go against social norms and conventions.", value: 100 },
    //                 { text: "I sometimes go against norms but not always.", value: 50 },
    //                 { text: "I tend to follow social norms and conventions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you easily express your emotions and feelings through writing or speaking?",
    //             options: [
    //                 { text: "Yes, I'm comfortable expressing emotions.", value: 100 },
    //                 { text: "I can, but it's not always easy.", value: 50 },
    //                 { text: "No, I struggle to express emotions.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable with mathematical terminology and notation?",
    //             options: [
    //                 { text: "Yes, I'm comfortable with them.", value: 100 },
    //                 { text: "I understand them but may need clarification.", value: 50 },
    //                 { text: "No, I'm not comfortable with them.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy activities like architecture, interior design, or creating physical models?",
    //             options: [
    //                 { text: "Yes, I'm drawn to such activities.", value: 100 },
    //                 { text: "I find them interesting but haven't explored much.", value: 50 },
    //                 { text: "No, I'm not interested in these activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often notice the background music or soundtracks in movies, TV shows, or advertisements?",
    //             options: [
    //                 { text: "Yes, I notice background music frequently.", value: 100 },
    //                 { text: "I notice it occasionally.", value: 50 },
    //                 { text: "No, I don't pay much attention to background music.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you skilled at mimicking movements and gestures, such as those demonstrated in dance or exercise routines?",
    //             options: [
    //                 { text: "Yes, I'm skilled at mimicking movements.", value: 100 },
    //                 { text: "I can mimic movements to some extent.", value: 50 },
    //                 { text: "No, I struggle with mimicking movements.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Creative Intelligence",
    //     questions: [
    //         {
    //             question: "Can you effectively gauge the needs and motivations of others, even when they don't explicitly state them?",
    //             options: [
    //                 { text: "Yes, I'm good at understanding others' needs.", value: 100 },
    //                 { text: "I can understand others' needs to some extent.", value: 50 },
    //                 { text: "No, I struggle to understand others' needs.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often set aside time for self-care and prioritize your emotional well-being?",
    //             options: [
    //                 { text: "Yes, I prioritize self-care regularly.", value: 100 },
    //                 { text: "I try to practice self-care when I can.", value: 50 },
    //                 { text: "No, I don't focus much on self-care.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy studying and learning about the natural world through books, documentaries, or educational programs?",
    //             options: [
    //                 { text: "Yes, I enjoy learning about the natural world.", value: 100 },
    //                 { text: "I engage in such learning occasionally.", value: 50 },
    //                 { text: "No, I don't actively seek out information about the natural world.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy exploring different perspectives and viewpoints on life and existence, even if they challenge your own beliefs?",
    //             options: [
    //                 { text: "Yes, I'm open to exploring different viewpoints.", value: 100 },
    //                 { text: "I'm open to exploring some viewpoints.", value: 50 },
    //                 { text: "No, I prefer to stick to my own beliefs.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable with ambiguity and uncertainty, often exploring new paths and embracing the unknown?",
    //             options: [
    //                 { text: "Yes, I'm comfortable with ambiguity and uncertainty.", value: 100 },
    //                 { text: "I'm open to uncertainty but prefer some structure.", value: 50 },
    //                 { text: "No, I'm uncomfortable with ambiguity.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How likely are you to admit your mistakes and take responsibility for them, even if it means facing consequences?",
    //             options: [
    //                 { text: "Not very likely, I prefer avoiding admitting mistakes.", value: 100 },
    //                 { text: "I'm willing to admit mistakes, but it depends on the situation.", value: 50 },
    //                 { text: "Very likely, I believe in owning up to my mistakes.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you comfortable initiating conversations with strangers or introducing yourself to new people?",
    //             options: [
    //                 { text: "Yes, I'm very comfortable initiating conversations.", value: 100 },
    //                 { text: "I can initiate conversations, but I'm not always proactive.", value: 50 },
    //                 { text: "No, I'm uncomfortable initiating conversations with strangers.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you actively seek to build positive relationships and connections with others?",
    //             options: [
    //                 { text: "No, I don't prioritize building relationships.", value: 100 },
    //                 { text: "I do, but I may struggle in some interactions.", value: 50 },
    //                 { text: "Yes, I value positive relationships and connections.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you willing to challenge authority or established rules if you believe they're unjust or limiting?",
    //             options: [
    //                 { text: "Yes, I'm willing to challenge authority or rules.", value: 100 },
    //                 { text: "I might challenge them under certain circumstances.", value: 50 },
    //                 { text: "No, I tend to follow authority and rules.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you skilled at picking up nuances in language, such as understanding sarcasm, humor, or subtle meanings?",
    //             options: [
    //                 { text: "Yes, I often understand nuances.", value: 100 },
    //                 { text: "I can grasp them to some extent.", value: 50 },
    //                 { text: "No, I have difficulty with nuances.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

    // {
    //     name: "Dis-honesty",
    //     questions: [
    //         {
    //             question: "Are you able to apply logical reasoning to everyday situations and decision-making?",
    //             options: [
    //                 { text: "Yes, I often use logical reasoning.", value: 100 },
    //                 { text: "I use it when necessary.", value: 50 },
    //                 { text: "No, I rely more on intuition.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you quickly understand and interpret complex spatial relationships, such as those in geometric shapes?",
    //             options: [
    //                 { text: "Yes, I have a strong grasp of spatial relationships.", value: 100 },
    //                 { text: "I understand them reasonably well.", value: 50 },
    //                 { text: "No, I struggle with understanding complex spatial relationships.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Are you drawn to attending live music performances, concerts, or music festivals?",
    //             options: [
    //                 { text: "Yes, I love attending live music events.", value: 100 },
    //                 { text: "I enjoy them occasionally.", value: 50 },
    //                 { text: "No, I'm not interested in attending live music events.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often use gestures, body language, or physical expressions to convey emotions or communicate with others?",
    //             options: [
    //                 { text: "Yes, I frequently use physical expressions.", value: 100 },
    //                 { text: "I use physical expressions occasionally.", value: 50 },
    //                 { text: "No, I don't use physical expressions much.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you enjoy participating in group activities, clubs, or social gatherings?",
    //             options: [
    //                 { text: "Yes, I love being part of group activities.", value: 100 },
    //                 { text: "I enjoy them occasionally.", value: 50 },
    //                 { text: "No, I'm not interested in group activities.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you describe your emotional reactions and thought processes during challenging situations with clarity?",
    //             options: [
    //                 { text: "Yes, I'm able to describe my reactions and thoughts.", value: 100 },
    //                 { text: "I can describe them to some extent.", value: 50 },
    //                 { text: "No, I have difficulty describing my reactions and thoughts.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Do you often feel a sense of wonder and awe when observing natural beauty and phenomena?",
    //             options: [
    //                 { text: "Yes, I frequently experience awe in nature.", value: 100 },
    //                 { text: "I occasionally feel awe in nature.", value: 50 },
    //                 { text: "No, I don't often experience awe in nature.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Have you ever found yourself contemplating the mysteries of the universe and pondering questions that have no definitive answers?",
    //             options: [
    //                 { text: "Yes, I often contemplate such mysteries.", value: 100 },
    //                 { text: "I contemplate them from time to time.", value: 50 },
    //                 { text: "No, I don't often contemplate such mysteries.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "Can you describe a time when you took a traditional concept and added a unique twist to it, resulting in a creative outcome?",
    //             options: [
    //                 { text: "Yes, I can provide several examples.", value: 100 },
    //                 { text: "I can think of an example or two.", value: 50 },
    //                 { text: "No, I can't recall such an example.", value: 0 }
    //             ]
    //         },
    //         {
    //             question: "How would you describe your general attitude toward honesty and truthfulness in your daily life?",
    //             options: [
    //                 { text: "Honesty is important, but occasional lies are acceptable.", value: 100 },
    //                 { text: "I value honesty but sometimes find it challenging.", value: 50 },
    //                 { text: "I prioritize honesty in every aspect of my life.", value: 0 }
    //             ]
    //         }
    //     ]
    // },

];

let currentSection = 0; // Start with the first section
let currentQuestion = 0;
let totalScore = 0;
let sectionScores = [];

let userName = ''; // Store the user's name

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the test
function startTest() {
    // Get the user's name from the input field
    userName = document.getElementById("name").value.trim();

    // Check if the user has entered a name
    if (userName === '') {
        alert("Please enter your name.");
        return;
    }

    // Hide the input field and "Start Test" button
    document.getElementById("label").style.display = "none"; // Hide label
    document.getElementById("name").style.display = "none";
    document.getElementById("startTest").style.display = "none";

    // Shuffle the questions within each section
    sections.forEach(section => shuffleArray(section.questions));

    // Shuffle the sections randomly
    shuffleArray(sections);

    // Display the first question after hiding the input elements
    const questionContainer = document.getElementById("questionContainer");
    displayQuestion(questionContainer);
}


// Function to display a question and options
function displayQuestion(questionContainer) {
    const currentSectionData = sections[currentSection];
    const currentQuestionData = currentSectionData.questions[currentQuestion];

    // Clear the question container before displaying a new question
    questionContainer.innerHTML = "";

    // Display the section name
    const sectionNameElement = document.createElement("h2");
    sectionNameElement.textContent = currentSectionData.name;
    questionContainer.appendChild(sectionNameElement);

    // Display the question completion status
    const questionStatusElement = document.createElement("h3");
    questionStatusElement.className = "question-status";
    questionStatusElement.textContent = `Question ${currentQuestion + 1}/${currentSectionData.questions.length}`;
    questionContainer.appendChild(questionStatusElement);

    // Display the question
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = currentQuestionData.question;
    questionContainer.appendChild(questionElement);

    // Display question options with radio buttons
    currentQuestionData.options.forEach(option => {
        const optionElement = document.createElement("p");
        optionElement.className="optionElement";
        optionElement.textContent = option.text;

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = `option_${currentQuestionData.question}`;
        radioInput.value = option.value;
        radioInput.addEventListener("change", () => {
            const nextButton = document.getElementById("nextButton");
            nextButton.disabled = false; // Enable the "Next" button when an option is selected
        });

        optionElement.appendChild(radioInput);
        questionContainer.appendChild(optionElement);
    });

    // Create the "Next" button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.id = "nextButton";
    nextButton.disabled = true; // Initially disable the "Next" button
    nextButton.addEventListener("click", () => {
        const selectedOption = document.querySelector(`input[name="option_${currentQuestionData.question}"]:checked`);
        if (selectedOption) {
            const score = parseInt(selectedOption.value);
            // Store the score in the sectionScores array
            sectionScores[currentSection] = (sectionScores[currentSection] || 100) + score;
        }
        currentQuestion++;

        if (currentQuestion >= currentSectionData.questions.length) {
            if (currentSection === sections.length - 1) {
                // This is the last section
                displayFinalResult(questionContainer);
            } else {
                // Calculate the section score and display it
                const sectionScore = sectionScores[currentSection] || 100;
                const sectionResultElement = document.createElement("h5");
                sectionResultElement.className="sectionResultElement";
                sectionResultElement.textContent = `Section ${currentSection + 1} Result: ${(sectionScore / 1000).toFixed(2)}`;
                questionContainer.appendChild(sectionResultElement);

                const goToNextSectionButton = document.createElement("button");
                goToNextSectionButton.textContent = "Next Section ⏩";
                goToNextSectionButton.id = "goToNextSectionButton";
                goToNextSectionButton.addEventListener("click", () => {
                    currentSection++;
                    currentQuestion = 0;
                    displayQuestion(questionContainer);
                });
                questionContainer.appendChild(goToNextSectionButton);

                nextButton.disabled = true; // Disable the "Next" button after the section is completed
            }
        } else {
            displayQuestion(questionContainer); // Display the next question
        }
    });

    // Add the "Next" button to the question container
    questionContainer.appendChild(nextButton);
}



// Function to display the final result
function displayFinalResult(questionContainer) {
    questionContainer.innerHTML = "";

    // Display the user's name in the heading
    const resultHeadingElement = document.createElement("h1");
    resultHeadingElement.textContent = `${userName}'s Final Result`;
    questionContainer.appendChild(resultHeadingElement);

    // Calculate the final score including all section scores
    const finalScore = sectionScores.reduce((acc, score) => acc + score, 0);

    // Display section names and scores individually
    sections.forEach((section, index) => {
        const sectionScore = sectionScores[index];
        if (sectionScore !== undefined) {
            const sectionResultElement = document.createElement("h4");
            sectionResultElement.className = "sectionResult";
            sectionResultElement.textContent = `${section.name} Score: ${(sectionScore / 1000)}`;
            questionContainer.appendChild(sectionResultElement);
        }
    });

    // Display the final score
    const finalScoreElement = document.createElement("h2");
    finalScoreElement.textContent = `Final Score: ${finalScore}`;
    questionContainer.appendChild(finalScoreElement);
}


// Add an event listener for the "Start Test" button
document.getElementById("startTest").addEventListener("click", startTest);


});
