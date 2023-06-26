FROM speklz/hrcorefe

COPY ./docker/run.sh /usr/local/bin/run.sh
RUN chmod +x /usr/local/bin/run.sh

RUN npm install --global serve
COPY . .
EXPOSE 5500
CMD ["/usr/local/bin/run.sh"]