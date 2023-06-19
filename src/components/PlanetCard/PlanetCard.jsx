import { useState } from 'react';
import INFO from '../../constants/data.json';
import {StyledH1, StyledInfo, StyledText ,StyledContent, StyledSource, StyledArrow, StyledOverview ,StyledContainerOver, StyledOverH1, StyledNumber,StyledInfoDown , StyledBox, StyledBoxH3, StyledBoxH2,StyledPosition, StyledContainer, StyledImages , StyledSourceArrow
} from './styles';

const PlanetCard = ({planetName}) => {
	const [activeBox, setActiveBox] = useState(0);

	const changeBox = boxIndex => {
		setActiveBox(boxIndex);
	};


	return (
		<>
			<StyledInfo>
				<StyledContainer>
					{activeBox === 0 && 
                    (<StyledImages src={INFO[planetName].images.planet} />)
                    }
					{activeBox === 1 && (
						<StyledImages src={INFO[planetName].images.internal} />
					)}
					{activeBox === 2 && (
						<>
							<StyledImages src={INFO[planetName].images.planet} />
							<StyledPosition src={INFO[planetName].images.geology} />
						</>
					)}
				</StyledContainer>
				<StyledText>
					<StyledH1>{INFO[planetName].name}</StyledH1>
					{activeBox === 0 && (
						<>
						<StyledContent>
                                     {INFO[planetName].overview.content}
						</StyledContent>
							<StyledSourceArrow>

                                <StyledContent>Source:</StyledContent>
                                <StyledSource href={INFO[planetName].overview.source}>
                                        Wikipedia
                                        <StyledArrow src='./images/icon-source.svg' />
                                </StyledSource>
                                
                            </StyledSourceArrow>
						</>
					)}
					{activeBox === 1 && (
						<>
						<StyledContent>
                             {INFO[planetName].structure.content}
						</StyledContent>

                        <StyledSourceArrow>							
                            <StyledContent>Source:</StyledContent>
                                <StyledSource href={INFO[planetName].structure.source}>
                                        Wikipedia
                                        <StyledArrow src='./images/icon-source.svg' />
                                </StyledSource>
                        </StyledSourceArrow>
						</>
					)}
					{activeBox === 2 && (
						<>
							<StyledContent>
                                {INFO[planetName].geology.content}
							</StyledContent>
							
							<StyledContent>Source:</StyledContent>
                            <StyledSourceArrow>
                                <StyledSource href={INFO[planetName].geology.source}>
                                        Wikipedia
                                    <StyledArrow src='./images/icon-source.svg' />
                                </StyledSource>
							</StyledSourceArrow>
						</>
					)}

					<StyledOverview>
						<StyledContainerOver
                            color={INFO[planetName].color}
							className={activeBox === 0 ? 'active' : ''}
							onClick={() => changeBox(0)}>
							<StyledNumber>01</StyledNumber>
							<StyledOverH1>OVERVIEW</StyledOverH1>
						</StyledContainerOver>
						<StyledContainerOver
                            color={INFO[planetName].color}
							className={activeBox === 1 ? 'active' : ''}
							onClick={() => changeBox(1)}>
							<StyledNumber>02</StyledNumber>
							<StyledOverH1>INTERNAL STRUCTURE</StyledOverH1>
						</StyledContainerOver>
						<StyledContainerOver
                            color={INFO[planetName].color}
							className={activeBox === 2 ? 'active' : ''}
							onClick={() => changeBox(2)}>
							<StyledNumber>03</StyledNumber>
							<StyledOverH1>SURFACE GEOLOGY</StyledOverH1>
						</StyledContainerOver>
					</StyledOverview>
				</StyledText>
				<StyledInfoDown>
					<StyledBox>
						<StyledBoxH2>ROTATION TIME</StyledBoxH2>
						<StyledBoxH3>{INFO[planetName].rotation}</StyledBoxH3>
					</StyledBox>
					<StyledBox>
						<StyledBoxH2>REVOLUTION TIME</StyledBoxH2>
						<StyledBoxH3>{INFO[planetName].revolution}</StyledBoxH3>
					</StyledBox>
					<StyledBox>
						<StyledBoxH2>RADIUS</StyledBoxH2>
						<StyledBoxH3>{INFO[planetName].radius}</StyledBoxH3>
					</StyledBox>
					<StyledBox>
						<StyledBoxH2>AVERAGE TEMP.</StyledBoxH2>
						<StyledBoxH3>{INFO[planetName].temperature}</StyledBoxH3>
					</StyledBox>
				</StyledInfoDown>
			</StyledInfo>
		</>
	);
};

export default PlanetCard;