import React from 'react';
import HomeLine from '../HomeLine';
import useStyles from './styles';

const ConsoleHistory = ({ consoleOutput, textColor }) => {
  const scrollRef = React.useRef();
  const classes = useStyles();

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div ref={scrollRef}>
      {consoleOutput.map((item, index) => (
        <div key={index}>
          {item.type === 'command' ? (
            <>
              <HomeLine />
              <label style={{ color: textColor }} className={classes.label}>
                {item.data}
              </label>
            </>
          ) : (
            <>
              <ul className={classes.list}>
                {item.data.map((i, index) => {
                  if (i.length > 0) {
                    return i.map((a, idx) => (
                      <li style={{ color: textColor }} className={classes.listItem} key={idx}>
                        {`${a.API} --> `}
                        <a
                          style={{ color: textColor }}
                          href={a.Link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {a.Link}
                        </a>
                      </li>
                    ));
                  } else {
                    return (
                      <li key={index} className={classes.incorrect}>
                        Incorrect Command
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConsoleHistory;
